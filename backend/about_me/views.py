from rest_framework import generics

from .models import Person
from .serializers import PersonSerializer


class AllUsers(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class SingleUser(generics.RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
