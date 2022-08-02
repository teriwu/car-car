from django.http import JsonResponse
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from sales_rest.models import SalesPerson
import json


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        # "id",
        "name",
        "employee_number",
    ]


@require_http_methods(["GET", "POST"])
def api_sales_persons(request):
    if request.method =="GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder=SalesPersonEncoder,
        )
    else:
        # try:
        content = json.loads(request.body)
        print("***** CONTENT *******:", content)
        sales_persons = SalesPerson.objects.create(**content)
        print("***** SALES_PERSON *******:", sales_persons)            
        return JsonResponse(
            sales_persons,
            encoder=SalesPersonEncoder,
            safe=False,
        )
        # except:
        #     return JsonResponse(
        #         {"message": "Could not create sales person"},
        #         status=400,
        #     )


