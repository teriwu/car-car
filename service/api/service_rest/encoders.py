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
        "employee_number",
        "name",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vip",
        "vin",
        "customer_name",
        "date_time",
        "reason",
        "technician",
    ]
    encoders = {
        "technician": TechnicianEncoder()
    }
    
    def get_extra_data(self, o):
        return {"technician": o.technician.name}
