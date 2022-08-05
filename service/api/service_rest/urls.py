from django.urls import path

from .views import (
    api_appointments,
    api_appointment,
    api_technicians,
    api_technician,
    api_vin,
)

urlpatterns = [
    path("appointments/", api_appointments, name="api_appointments"),
    path("appointments/<int:pk>/", api_appointment, name="api_appointment"),
    path("appointments/<str:pk>/", api_vin, name="api_vin"),
    path("technicians/", api_technicians, name="api_technicians"),
    path("technicians/<int:pk>/", api_technician, name="api_technician"),
]