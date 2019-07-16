from rest_framework import serializers
from .models import Person
from datetime import datetime

class PersonSerializer(serializers.ModelSerializer):
    # Getting the age of the person
    age = serializers.ReadOnlyField()

    class Meta:
        model = Person 
        fields = "__all__"
