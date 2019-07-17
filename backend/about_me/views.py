from rest_framework import generics

from .models import Person, PersonExperience
from .serializers import PersonSerializer, PersonExperienceSerializer


class AllUsers(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class SingleUser(generics.RetrieveAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer


class UserExperience(generics.ListAPIView):
    #queryset = PersonExperience.objects.all()
    serializer_class = PersonExperienceSerializer

    def get_queryset(self):
        """
        Returns only the experiences of a specific user
        """
        user_id = self.request.query_params.get('user_id', None)
        if not user_id:
            user_id = 1
        return PersonExperience.objects.filter(user_id=user_id)
