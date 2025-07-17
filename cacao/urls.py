from django.urls import path
from cacao import views


urlpatterns = [
    path('personas/', views.PERSONASView.as_view(), name='personas-list-create'),
    path('personas/<int:pk>/', views.PERSONASView.as_view(), name='personas-detail'),
    path('paises/', views.paisesView.as_view(), name='paises-list'),
    path('departamentos/', views.departamentosView.as_view(), name='departamentos-list'),
    path('municipios/', views.municipiosView.as_view(), name='municipios-list'),
    path('tipos-documentos/', views.tiposDocumentosView.as_view(), name='tipos-documentos-list'),
]
