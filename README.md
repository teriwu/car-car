# CarCar

Team:

* Person 1 - Which microservice? Teresa Wu - Automobile Service
* Person 2 - Which microservice? Jennifer Wu - Auto Sales

## Project overview

CarCar is an app that allows you to inventory automobiles and manage automobile
servicing within the user's dealership.  

## Design

Bounded context:  There are three bounded contexts within the domain.
Please refer to image « excalidraw_modeling.png » in VSCode for bounded
context drawing in our Domain.  Both the Service and Sales Microservices
will use a poller to obtain data from the Inventory Microservice to use 
as our Automobile value object in each respective microservice.

## Navigation

**Service microservice**
<br>
The Service Microservice includes three models:
- Technician model - name, employee_number
- The Appointment- vin, technician, customer name, date_time
- The AutomobileVO model- import_href and vin

The AutomobileVO model polls for data within the Inventory Microservices.
It uses that data to create an automobile value object to use in our Appointment
model. 

**Sales microservice**
<br>
The Sales Microservice includes four models: 
- The SalesPerson model - name, employee_number
- The Customer model- name, address, phone_number
- The SalesRecord model- sales person, customer, automobile, sales price, and sold
- The AutomobileVO model- import href and vin

The AutomobileVO model polls for data within the Inventory Microservices.
It uses that data to create an automobile value object to use to make a sales record
and keep track of inventories sold when a sold record is created.

---
## Getting started

This application is run using Docker and React.

To view this repository:<br>
Fork and clone from respository https://gitlab.com/teriwu/project-beta

To run in Docker, use following commands in your Terminal at your
project directory:

```
docker volume create beta-data
docker-compose build
docker-compose up
```

There should be seven containers in total: 1 (for our project), 3 (for each microservice), 2
(for our pollers in our service api and sales api), 1 (for React), and 1 (for our database). 

---
## Other notes

- Service Appointments List at http://localhost:3000/appointments does not automatically refresh itself when using the buttons: Search VIN, Cancel, Finish
    - Bandaid solution: refresh page manually