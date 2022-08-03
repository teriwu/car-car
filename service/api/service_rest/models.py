from django.db import models
from django.urls import reverse


# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17)


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.AutoField(primary_key=True)

    def get_api_url(self):
        return reverse("api_technician", kwargs={"pk": self.pk})



class Appointment(models.Model):
    vip = models.BooleanField(default=False)
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=100)
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_appointment", kwargs={"pk": self.pk})
