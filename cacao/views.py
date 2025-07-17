from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import PERSONAS
from .serializer import PERSONASSerializer, PaisesSerializer, DepartamentosSerializer, MunicipiosSerializer, TiposDocumentosSerializer
from django.http import Http404

# Create your views here.

class PERSONASView(APIView):
    def get(self, request, pk=None):
        numero_documento = request.query_params.get('numero_documento', None)
        
        if pk:
            try:
                persona = PERSONAS.objects.get(pk=pk)
                serializer = PERSONASSerializer(persona)
                return Response(serializer.data)
            except PERSONAS.DoesNotExist:   
                raise Http404
        
        elif numero_documento:
            # Filtrar por número de documento
            try:
                persona = PERSONAS.objects.get(numero_documento=numero_documento)
                serializer = PERSONASSerializer(persona)
                return Response(serializer.data)
            except PERSONAS.DoesNotExist:
                raise Http404    
        
        else:
            personas = PERSONAS.objects.all()
            serializer = PERSONASSerializer(personas, many=True)
            return Response(serializer.data)

    def post(self, request):
        serializer = PERSONASSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            persona = PERSONAS.objects.get(pk=pk)
        except PERSONAS.DoesNotExist:
            raise Http404
        serializer = PERSONASSerializer(persona, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            persona = PERSONAS.objects.get(pk=pk)
        except PERSONAS.DoesNotExist:
            raise Http404
        persona.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class paisesView(APIView):
    def get(self, request):
        paises = paises.objects.all()
        serializer = PaisesSerializer(paises, many=True)
        return Response(serializer.data)
    
class departamentosView(APIView):
    def get(self, request):
        departamentos = departamentos.objects.all()
        serializer = DepartamentosSerializer(departamentos, many=True)
        return Response(serializer.data)

class municipiosView(APIView):
    def get(self, request):
        municipios = municipios.objects.all()
        serializer = MunicipiosSerializer(municipios, many=True)
        return Response(serializer.data)

class tiposDocumentosView(APIView):
    def get(self, request):
        tipos_documentos = tipos_documentos.objects.all()
        serializer = TiposDocumentosSerializer(tipos_documentos, many=True)
        return Response(serializer.data)

