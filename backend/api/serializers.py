from rest_framework import serializers
from .models import UserRegistration

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserRegistration
        fields = ('username', 'password','pan_number', 'gender')
