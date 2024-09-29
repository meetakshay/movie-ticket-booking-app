from rest_framework.urls import path
from .views import MoviesView
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    path('', csrf_exempt(MoviesView.as_view()), name='all_Movies'),
]


