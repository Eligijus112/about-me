"""
Urls for the about_me application
"""
from django.urls import path
from .views import AllUsers, SingleUser, UserExperience, UserLinks

urlpatterns = [
    path('', AllUsers.as_view()),
    path('<int:pk>/', SingleUser.as_view()),
    path('experience/', UserExperience.as_view()),
    path('links/', UserLinks.as_view()),
]
