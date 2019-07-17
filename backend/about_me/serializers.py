from rest_framework import serializers
from .models import Person, PersonExperience, PersonLinks
from datetime import datetime


class PersonSerializer(serializers.ModelSerializer):
    # Getting the age of the person
    age = serializers.ReadOnlyField()

    class Meta:
        model = Person 
        fields = "__all__"


class PersonExperienceSerializer(serializers.ModelSerializer):
    # Calculating the number of months worked 
    months_in_job = serializers.ReadOnlyField()

    class Meta:
        model = PersonExperience
        fields = "__all__"


class PersonLinksSerializer(serializers.ModelSerializer):

    class Meta:
        model = PersonLinks
        fields = "__all__"