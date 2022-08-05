from keyword import softkwlist
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    AutomobileVOEncoder,
    TechnicianEncoder,
    AppointmentEncoder,
)
from .models import AutomobileVO, Technician, Appointment


@require_http_methods(["GET", "POST"])
def api_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False,
        )
    else: # POST
        content = json.loads(request.body)
        try:
            # sold_vin = AutomobileVO.objects.get(vin=content["vin"])
            if AutomobileVO.objects.filter(vin=content["vin"]).exists():
            # if sold_vin:
                content["vip"] = True
            else: 
                content["vip"] = False
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin"},
                status=400,
            )
        
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_appointment(request, pk):
    try:
        appointment = Appointment.objects.get(id=pk)
        appointment.delete()
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    except Appointment.DoesNotExist:
        return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False,
        )
    else: # POST
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create the technician"},
                status=400,
            )

@require_http_methods(["DELETE"])
def api_technician(request, pk):
    try:
        technician = Technician.objects.get(employee_number=pk)
        technician.delete()
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
    except Technician.DoesNotExist:
        return JsonResponse({"message": "Does not exist"})


@require_http_methods(["GET"])
def api_vin(request, pk):