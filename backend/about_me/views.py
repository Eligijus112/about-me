from rest_framework import generics

from .models import Person, UserProfile  
from .serializers import PersonSerializer, ProfilePicSerializer


class AllUsers(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class SingleUser(generics.RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class UserImage(generics.RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = ProfilePicSerializer