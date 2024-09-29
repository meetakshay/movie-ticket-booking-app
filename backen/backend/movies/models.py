


from django.db import models


class Movie(models.Model):
    # Fields corresponding to movie information
    movie_id = models.AutoField(primary_key=True)  # Auto-generated ID for each movie
    title = models.CharField(max_length=255)
    image = models.URLField(max_length=500)
    releaseYear = models.CharField(max_length=500)
    director = models.CharField(max_length=255)
    description = models.TextField(max_length=500)
    duration = models.CharField(max_length=50)  # Storing runtime as a string like "142 minutes"
    genre = models.JSONField()  # List of genres
    language = models.CharField(max_length=50)
    rating = models.DecimalField(max_digits=3, decimal_places=1)  # e.g. 8.7 or 9.3
    starring = models.JSONField()

    def _str_(self):
        return self.title
