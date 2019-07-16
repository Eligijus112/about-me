"""
Urls for the about_me application
"""
from django.urls import path
from .views import AllUsers, SingleUser

urlpatterns = [
    path('', AllUsers.as_view()),
    path('<int:pk>/', SingleUser.as_view())
]
