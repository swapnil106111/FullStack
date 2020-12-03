from django.shortcuts import render
from rest_framework import status, viewsets
from rest_framework.decorators import api_view
from .models import UserRegistration
from rest_framework.response import Response
from django.db import IntegrityError

# Create your views here.
class BackendViewSet(viewsets.ModelViewSet):
    @api_view(['POST'])
    def register(request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')
            confirm_password = request.data.get('confirm_password')
            pan_number = request.data.get('pan_number')
            gender = request.data.get('gender')

            users = UserRegistration.objects.all();
            if(not username or not password or not confirm_password or not pan_number or not gender):
                return Response({"message": "Please provide proper username, password, confirm password, pan number and gender."}, status=status.HTTP_406_NOT_ACCEPTABLE)

            if(password != confirm_password):
                return Response({"message": "Password and confirm password is not matching."}, status=status.HTTP_406_NOT_ACCEPTABLE)

            user_exist = UserRegistration.objects.filter(username=username).count()

            if user_exist !=0:
                return Response({"message": "User already exist."}, status=status.HTTP_406_NOT_ACCEPTABLE)

            try:
                UserRegistration(username=username, password=password, pan_number=pan_number,gender=gender).save()
            except IntegrityError:
                return Response({"message": "User already exist."}, status=status.HTTP_406_NOT_ACCEPTABLE)

            return Response({"message": "success"},
                            status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"message": "Invalid input"}, status=status.HTTP_406_NOT_ACCEPTABLE)

    @api_view(['POST'])
    def login(request):
        try:
            username = request.data.get('username')
            password = request.data.get('password')

            users = UserRegistration.objects.all();
            if(not username or not password ):
                return Response({"message": "Please provide proper username, password."}, status=status.HTTP_406_NOT_ACCEPTABLE)

            try:
                user_exist = UserRegistration.objects.filter(username=username, password=password).count()
            except Exception as e:
                pass
        
            if(user_exist == 1):
                return Response({"message": "success"},status=status.HTTP_200_OK)
            else:
                return Response({"message": "Authentication failed"}, status=status.HTTP_406_NOT_ACCEPTABLE)
        except Exception as e:
           
            return Response({"message": "Invalid input"}, status=status.HTTP_406_NOT_ACCEPTABLE)
       