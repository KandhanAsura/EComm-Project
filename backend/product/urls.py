from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import ProtectedView, RegisterView

router = DefaultRouter()
router.register(r'products', views.ProductViewSet)

# urlpatterns = [
#     path('api/', include(router.urls)),
#     path('api/register/', views.register),
# ]
urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/protected/', ProtectedView.as_view(), name='protected'),
    path('api/', include(router.urls)),

]
