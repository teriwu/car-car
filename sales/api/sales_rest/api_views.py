from django.http import JsonResponse
from common.json import ModelEncoder
from django.views.decorators.http import require_http_methods
from sales_rest.models import AutomobileVO, Customer, SalesPerson, SalesRecord
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["id", "vin", "import_href",]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "id",
        "name",
        "employee_number",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "id",
        "name",
        "address",
        "phone_number",
    ]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "id",
        "automobile",
        "sales_person",
        "customer",
        "sales_price",
        "sold",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }


@require_http_methods(["GET"])
def api_sales_persons(request):
    if request.method =="GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder=SalesPersonEncoder,
        )
    else:
        try:
            content = json.loads(request.body)

            sales_persons = SalesPerson.objects.create(**content)           
            return JsonResponse(
                sales_persons,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create sales person"},
                status=400,
            )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_sales_person(request, pk):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales person does not exist"},
                status=404,
            )
    elif request.method == "DELETE":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            sales_person.delete()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales person does not exist"},
                status=404,
            )
    else:
        content = json.loads(request.body)
        SalesPerson.objects.filter(id=pk).update(**content)
        sales_person_detail = SalesPerson.objects.get(id=pk)
        return JsonResponse(
            sales_person_detail,
            encoder=SalesPersonEncoder,
            safe=False,
        )


@require_http_methods(["GET"])
def api_sales_person_sales(request, pk):
    if request.method == "GET":
        try:
            # to test at endpoint, use employee number for pk in path
            all_sales_records = SalesRecord.objects.filter(sales_person__employee_number=pk)
            # sales_person_sales_records = [record for record in all_sales_records if record["sales_person"]["id"]==pk]
            return JsonResponse(
                {"sales_records": all_sales_records},
                encoder=SalesRecordEncoder
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Sales person does not exist"},
                status=404,
            )
    else:
        return JsonResponse(
            {"message": "Whoops!"},
            status=400,
        )


@require_http_methods(["GET", "POST"])
def api_customers(request):
    if request.method =="GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers": customers},
            encoder=CustomerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)

            customer = Customer.objects.create(**content)           
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create customer"},
                status=400,
            )



@require_http_methods(["DELETE", "GET", "PUT"])
def api_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=404,
            )
    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=404,
            )
    else:
        content = json.loads(request.body)
        Customer.objects.filter(id=pk).update(**content)
        customer_detail = Customer.objects.get(id=pk)
        return JsonResponse(
            customer_detail,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_sales_records(request):
    if request.method == "GET":
        sales_records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SalesRecordEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            print("***CONTENT****", content)

            automobile_id = content["automobile"]
            automobile = AutomobileVO.objects.get(id=automobile_id)
            content["automobile"] = automobile


            sales_person_id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=sales_person_id)
            content["sales_person"] = sales_person

            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer

            sales_record = SalesRecord.objects.create(**content)
            # print(sales_record)
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Could not create sales record"},
                status=400,
            )   


@require_http_methods(["DELETE", "GET", "PUT"])
def api_sales_record(request, pk):
    if request.method == "GET":
        try:
            sales_record = SalesRecord.objects.get(id=pk)
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "Sales record does not exist"},
                status=404,
            )
    elif request.method == "DELETE":
        try:
            sales_record = SalesRecord.objects.get(id=pk)
            sales_record.delete()
            return JsonResponse(
                {"message": "Deleted sales record"},
                status=404,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse ({"message": "Does not exist"})
    else:
        content = json.loads(request.body)
        SalesRecord.objects.filter(id=pk).update(**content)
        sales_record_detail = SalesRecord.objects.get(id=pk)
        return JsonResponse(
            sales_record_detail,
            encoder=SalesRecordEncoder,
            safe=False,
        )
