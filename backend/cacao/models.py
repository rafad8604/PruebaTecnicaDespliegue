from django.db import models
from .choices import tipoDePersona, tipoDeEmpresa, tipoDeDocumento, paisSelect, departamentoSelect, municipioSelect

# Create your models here.

class PERSONAS(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    fecha_limite = models.DateField()
    numero_documento = models.CharField(max_length=20)
    tipo_persona = models.CharField(max_length=50, choices=tipoDePersona)#select
    digito_verificacion = models.CharField(max_length=10, null=True, blank=True)
    razon_social = models.CharField(max_length=200, null=True, blank=True)
    nombre_comercial = models.CharField(max_length=200, null=True, blank=True)
    direccion = models.CharField(max_length=255, null=True, blank=True)
    tipo_empresa = models.CharField(max_length=50, null=True, blank=True, choices=tipoDeEmpresa)  # select
    correo_electronico = models.EmailField(null=True, blank=True)
    numero_celular = models.CharField(max_length=15, null=True, blank=True)
    quien_diligencia = models.CharField(max_length=100, null=True, blank=True)
    cargo = models.CharField(max_length=100, null=True, blank=True)
    area = models.CharField(max_length=100, null=True, blank=True)
    
    #FK
    nombre_pais = models.ForeignKey('paises', on_delete=models.CASCADE, related_name='personas', null=True, blank=True)
    tipo_de_documento = models.ForeignKey('tipos_documentos', on_delete=models.CASCADE, related_name='personas_tipos_documentos', null=True, blank=True)
    
    def __str__(self):
        return self.titulo
    
class paises(models.Model):
    nombre_pais = models.CharField(max_length=100, choices=paisSelect)
    
    def __str__(self):
        return self.nombre_pais
    
class departamentos(models.Model):
    nombre_departamento = models.CharField(max_length=100, choices=departamentoSelect)
    pais = models.ForeignKey(paises, on_delete=models.CASCADE, related_name='departamentos')
    
    def __str__(self):
        return self.nombre_departamento

class municipios(models.Model):
    nombre_municipio = models.CharField(max_length=100, choices=municipioSelect)
    departamento = models.ForeignKey(departamentos, on_delete=models.CASCADE, related_name='municipios')
    
    def __str__(self):
        return self.nombre_municipio

class tipos_documentos(models.Model):
    tipo_de_documento = models.CharField(max_length=50, choices=tipoDeDocumento)
    
    def __str__(self):
        return self.tipo_de_documento
    