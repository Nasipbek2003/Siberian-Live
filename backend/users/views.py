from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.contrib.auth import login, logout
from django.contrib.auth.models import User
from .serializers import UserRegistrationSerializer, UserLoginSerializer, UserSerializer


@api_view(['POST'])
@permission_classes([AllowAny])
def register_user(request):
    """
    Регистрация нового пользователя
    """
    print(f"Register request data: {request.data}")  # Логирование
    serializer = UserRegistrationSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        print(f"User created: {user.username}")  # Логирование
        # Автоматически входим пользователя после регистрации
        login(request, user)
        
        # Возвращаем данные пользователя
        user_data = UserSerializer(user).data
        return Response({
            'message': 'Пользователь успешно зарегистрирован',
            'user': user_data
        }, status=status.HTTP_201_CREATED)
    
    print(f"Validation errors: {serializer.errors}")  # Логирование
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([AllowAny])
def login_user(request):
    """
    Вход пользователя
    """
    serializer = UserLoginSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.validated_data['user']
        login(request, user)
        
        # Возвращаем данные пользователя
        user_data = UserSerializer(user).data
        return Response({
            'message': 'Успешный вход',
            'user': user_data
        }, status=status.HTTP_200_OK)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def logout_user(request):
    """
    Выход пользователя
    """
    logout(request)
    return Response({
        'message': 'Успешный выход'
    }, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_user_profile(request):
    """
    Получение профиля текущего пользователя
    """
    if request.user.is_authenticated:
        user_data = UserSerializer(request.user).data
        return Response({
            'user': user_data
        }, status=status.HTTP_200_OK)
    
    return Response({
        'message': 'Пользователь не авторизован'
    }, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['PUT'])
def update_user_profile(request):
    """
    Обновление профиля пользователя
    """
    if request.user.is_authenticated:
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({
                'message': 'Профиль обновлен',
                'user': serializer.data
            }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({
        'message': 'Пользователь не авторизован'
    }, status=status.HTTP_401_UNAUTHORIZED)
