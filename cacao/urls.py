from django.urls import path
from cacao import views


urlpatterns = [
    path('personas/', views.PERSONASView.as_view(), name='personas-list-create'),
    path('personas/<int:pk>/', views.PERSONASView.as_view(), name='personas-detail'),
]
