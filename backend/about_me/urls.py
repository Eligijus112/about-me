"""
Urls for the about_me application
"""
from django.urls import path
from .views import AllUsers, SingleUser, UserImage

urlpatterns = [
    path('', AllUsers.as_view()),
    path('<int:pk>/', SingleUser.as_view()),
    path('<int:pk>/image/', UserImage.as_view())
]
