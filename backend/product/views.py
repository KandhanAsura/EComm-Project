from django.shortcuts import render
from rest_framework.permissions import IsAuthenticated


# Create your views here.
from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from django.contrib.auth.models import User

# ViewSet for Products
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]
    def create(self, request, *args, **kwargs):
        # Check if the request contains a list of products
        if isinstance(request.data, list):
            serializer = ProductSerializer(data=request.data, many=True)  # Pass many=True
        else:
            serializer = ProductSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny

class RegisterView(APIView):
    permission_classes = [AllowAny]  # Allow anyone to access this view (even unauthenticated users)

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()

        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)



from rest_framework.views import APIView
from rest_framework.response import Response

class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"message": f"Hello, {request.user.username}! You are authenticated."})