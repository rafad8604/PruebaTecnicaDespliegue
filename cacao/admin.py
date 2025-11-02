from django.contrib import admin
from .models import PERSONAS, paises, departamentos, municipios, tipos_documentos

# Register your models here.
admin.site.register(PERSONAS)
admin.site.register(paises)
admin.site.register(departamentos)
admin.site.register(municipios)
admin.site.register(tipos_documentos)
