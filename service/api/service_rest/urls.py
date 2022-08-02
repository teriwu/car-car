from django.urls import path

from .views import (
    api_appointments,
    api_appointment,
    api_technicians,
)

urlpatterns = [
    path("appointments/", api_appointments, name="api_appointments"),
    path("appointments/<str:vin>/", api_appointment, name="api_appointment"),
    path("technicians/", api_technicians, name="api_technicians"),
]