from django.db import models
from datetime import datetime
from phone_field import PhoneField


class Person(models.Model):
    """
    Data model regarding personal information
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
        return int((datetime.now().date() - self.date_of_birth).days / 365)


class PersonExperience(models.Model):
    """
    Data model regarding the experience of a user
    """

    user = models.ForeignKey(Person, on_delete=models.CASCADE)
    firm = models.CharField(max_length=100, default='', null=True)
    title = models.CharField(max_length=50, default='', null=True)
    description = models.TextField(default='', null=True)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    @property
    def months_in_job(self):
        """
        A function that calculates time spent in one workplace
        """
        end_date = self.end_date 
        start_date = self.start_date 

        # If there is no end date we will assume that this is the current work place
        if end_date is None:
            end_date = datetime.now()
            end_date = datetime.date(end_date)
            self.end_date = datetime.date(datetime.now())
        return int((end_date - start_date).days/30)



