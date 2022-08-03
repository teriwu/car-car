from django.urls import path

from .api_views import (
    api_sales_persons,
    api_sales_person,
    api_customers,
    api_customer,
)


urlpatterns = [
    path("sales_persons/", api_sales_persons, name="sales_persons"),
    path("sales_persons/<int:pk>/", api_sales_person, name="sales_person"),
    path("customers/", api_customers, name="customers"),
    path("customers/<int:pk>/", api_customer, name="customer"),
]
