from rest_framework import serializers
from .models import PERSONAS

class PERSONASSerializer(serializers.ModelSerializer):
    class Meta:
        model = PERSONAS  
        fields = '__all__'
