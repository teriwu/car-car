from django.urls import path

from .api_views import (
    api_sales_persons,
)


urlpatterns = [
    path("sales_persons/", api_sales_persons, name="sales_persons"),
]
