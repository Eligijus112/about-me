from django.contrib import admin 
from .models import Person, UserProfile

admin.site.register(Person)
admin.site.register(UserProfile)