
# # Create your views here.


# from django.shortcuts import render
# from rest_framework import status, generics
# from .models import Movie
# from .serializers import MoviesSerializer
# from rest_framework.response import Response

# class MoviesView(generics.GenericAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MoviesSerializer

#     def get(self, req):
#         queryset = Movie.objects.all()  
#         serializer = self.serializer_class(queryset, many=True)
#         print(queryset)
#         return Response({"data": serializer.data, "msg": "Successfully fetched movies"}, status=status.HTTP_200_OK)





from rest_framework import status, generics
from .models import Movie
from .serializers import MoviesSerializer
from rest_framework.response import Response
import json  # For JSON conversion

class MoviesView(generics.GenericAPIView):
    queryset = Movie.objects.all()
    serializer_class = MoviesSerializer

    def get(self, request):
        queryset = Movie.objects.all()  
        for movie in queryset:
            # Ensure starring and genre are in correct JSON string format
            if isinstance(movie.starring, list):
                movie.starring = json.dumps(movie.starring)  # Convert list to JSON string
            if isinstance(movie.genre, list):
                movie.genre = json.dumps(movie.genre)  # Convert list to JSON string

        serializer = self.serializer_class(queryset, many=True)
        return Response({"data": serializer.data, "msg": "Successfully fetched movies"}, status=status.HTTP_200_OK)