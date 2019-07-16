from django.db import models
from datetime import datetime
from phone_field import PhoneField


class Person(models.Model):
    """
    Data regarding personal information
    """

    name = models.CharField(max_length=150, default='', null=True)
    surname = models.CharField(max_length=150, default='', null=True)
    caption = models.CharField(max_length=150, default='', null=True)
    date_of_birth = models.DateField(null=True, blank=True)
    country = models.CharField(max_length=100, default='', null=True)
    city = models.CharField(max_length=150, default='', null=True)
    phone = PhoneField(blank=True, help_text='Contact phone number', default='')
    email = models.EmailField(default='', blank=True)
    short_description = models.TextField(default='', null=True)
    profile_image = models.FileField(upload_to='profile_pictures', default='', null=True)

    @property
    def age(self):
        """
        A function to get the age of a person
        """
        return int((datetime.now().date() - self.date_of_birth).days / 365.25)
