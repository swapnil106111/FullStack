from django.db import models
from django.core.validators import MinLengthValidator

# Create your models here.
class UserRegistration(models.Model):
    username = models.CharField(primary_key=True, max_length=100, default="",blank=False)
    password = models.CharField(max_length=100, default="",blank=False)
    pan_number = models.CharField(max_length=10, default="", validators=[MinLengthValidator(10)])
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, default="",choices=GENDER_CHOICES)