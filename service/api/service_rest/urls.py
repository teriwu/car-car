from django.urls import path

from .views import (
    api_services,
    api_service,
)

urlpatterns = [
    path("appointments/", api_services, name="api_services"),
    path("appointments/<int:pk>/", api_service, name="api_service")
]