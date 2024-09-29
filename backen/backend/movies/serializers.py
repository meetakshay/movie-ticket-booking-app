from rest_framework import serializers
from .models import Movie

class MoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ["movie_id", "title", "image", "releaseYear", "director", "description", "duration", "genre", "language", "rating", "starring"]