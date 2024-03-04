from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer
import json

class PostApiView(APIView):
    print("Heelo")
    serializer_class = PostSerializer

    # Path to your mock data file
    mock_data_file = './mockData.json'

    def get(self, request):
        try:
            # Assuming your JSON data is structured like the response in BookApiView
            with open(self.mock_data_file, 'r') as file:
                mock_data = json.load(file)
                print(mock_data)
        except FileNotFoundError:
            return Response(status=status.HTTP_404_NOT_FOUND)

        return Response({"Message": "List of Posts", "Post List": mock_data})

    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            # Assuming your serializer handles 'id', 'title', and 'author' fields
            serializer.save()

            # Assuming you return the added post after saving
            added_post = Post.objects.filter(id=serializer.data['id']).values()
            return Response({"Message": "New Post Added!", "Post": added_post}, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
