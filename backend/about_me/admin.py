from django.contrib import admin 
from .models import Person, PersonExperience, PersonLinks

admin.site.register(Person)
admin.site.register(PersonExperience)
admin.site.register(PersonLinks)