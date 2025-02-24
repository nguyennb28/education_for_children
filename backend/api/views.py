from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = 

    def get_permissions(self):
        # return super().get_permissions()
        if self.action == "create":
            return [AllowAny()]
        return [IsAuthenticated()]
