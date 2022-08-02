from common.json import ModelEncoder

from .models import AutomobileVO, Technician, Appointment

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href", "vin",
    ]


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer_name",
        "date",
        "time",
        "reason",
    ]
    
    def get_extra_data(self, o):
        return {"technician": o.technician.name}
