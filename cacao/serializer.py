from rest_framework import serializers
from .models import PERSONAS, paises, departamentos, municipios, tipos_documentos

class PERSONASSerializer(serializers.ModelSerializer):
    class Meta:
        model = PERSONAS  
        fields = '__all__'

class PaisesSerializer(serializers.ModelSerializer):
    class Meta:
        model = paises
        fields = '__all__'

class DepartamentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = departamentos
        fields = '__all__'

class MunicipiosSerializer(serializers.ModelSerializer):
    class Meta:
        model = municipios
        fields = '__all__'

class TiposDocumentosSerializer(serializers.ModelSerializer):
    class Meta:
        model = tipos_documentos
        fields = '__all__'
