from rest_framework import generics

from .models import Person, PersonExperience, PersonLinks, PersonBooks
from .serializers import PersonSerializer, PersonExperienceSerializer
from .serializers import PersonLinksSerializer, PersonBooksSerializer


class AllUsers(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class SingleUser(generics.RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class UserExperience(generics.ListAPIView):
    serializer_class = PersonExperienceSerializer

    def get_queryset(self):
        """
        Returns only the experiences of a specific user
        """
        user_id = self.request.query_params.get('user_id', None)
        if not user_id:
            user_id = 1
    
        return PersonExperience.objects.filter(user_id=user_id).order_by('-start_date')


class UserLinks(generics.ListAPIView):
    serializer_class = PersonLinksSerializer

    def get_queryset(self):
        """
        Returns only the experiences of a specific user
        """
        user_id = self.request.query_params.get('user_id', None)
        if not user_id:
            user_id = 1
    
        return PersonLinks.objects.filter(user_id=user_id)


class UserBooks(generics.ListAPIView):
    """
    Returns a list of the books of the user
    """
    serializer_class = PersonBooksSerializer

    def get_queryset(self):
        """
        Returns only the experiences of a specific user
        """
        user_id = self.request.query_params.get('user_id', None)
        if not user_id:
            user_id = 1
    
        return PersonBooks.objects.filter(user_id=user_id).order_by('-user_rating')