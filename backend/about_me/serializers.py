from rest_framework import serializers
from .models import Person, UserProfile 
from datetime import datetime

class PersonSerializer(serializers.ModelSerializer):
    age = serializers.ReadOnlyField()

    class Meta:
        model = Person 
        fields = (
            'id', 'name', 'surname', 'country', 
            'city', 'date_of_birth', 'short_description',
            'age'
            )


class ProfilePicSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"