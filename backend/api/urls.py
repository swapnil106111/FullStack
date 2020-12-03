from django.urls import path

from . import views

urlpatterns = [
    path('register', views.BackendViewSet.register, name='register'),
    path('login', views.BackendViewSet.login, name='login'),   
]