from django.db import models

# Create your models here.

class PERSONAS(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    fecha_limite = models.DateField()
    numero_documento = models.CharField(max_length=20, null=True, blank=True)
    
    def __str__(self):
        return self.titulo