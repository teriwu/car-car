from django.urls import path

from .views import (
    api_appointments,
    api_appointment,
)

urlpatterns = [
    path("appointments/", api_appointments, name="api_appointments"),
    path("appointments/<int:pk>/", api_appointment, name="api_appointment")
]