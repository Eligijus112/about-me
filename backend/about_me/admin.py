from django.contrib import admin 
from .models import Person, PersonExperience, PersonLinks, PersonTechnologyStack
from .models import PersonBooks

admin.site.register(Person)
admin.site.register(PersonExperience)
admin.site.register(PersonLinks)
admin.site.register(PersonTechnologyStack)
admin.site.register(PersonBooks)