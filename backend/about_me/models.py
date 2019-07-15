from django.db import models
from .settings import MEDIA_ROOT


class Person(models.Model):
    """
    Data regarding personal information
    """

    name = models.CharField(max_length=150, default='', null=True)
    surname = models.CharField(max_length=150, default='', null=True)
    date_of_birth = models.DateField(null=True, blank=True)
    country = models.CharField(max_length=100, default='', null=True)
    city = models.CharField(max_length=150, default='', null=True)
    bachelor = models.BooleanField()
    masters = models.BooleanField()
    doctor_degree = models.BooleanField()
    short_description = models.CharField(max_length=250, default='', null=True)

class UserProfile(models.Model):
    """
    Data regarding profile picture 
    """    

    user = models.OneToOneField(Person, unique=True, on_delete=models.CASCADE)
    profile_image = models.ImageField(upload_to='profile_pictures')