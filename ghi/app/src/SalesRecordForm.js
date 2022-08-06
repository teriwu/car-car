import React from "react";

class SalesRecordForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            sales_persons: [],
            sales_person: "",
            customers: [],
            customer: "",
            autos: [],
            sales_price: "",
        }
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this)
        this.handleCustomerChange = this.handleCustomerChange.bind(this)
        this.handleAutomobileChange = this.handleAutomobileChange.bind(this)
        this.handleSalesPriceChange = this.handleSalesPriceChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSalesPersonChange(event) {
        const value = event.target.value;
        this.setState({sales_person: value});
    }

    handleCustomerChange(event) {
        const value = event.target.value;
        this.setState({customer: value});
    }

    handleAutomobileChange(event) {
        const value = event.target.value;
        this.setState({automobile: value});
    }

    handleSalesPriceChange(event) {
        const value = event.target.value;
        this.setState({sales_price: value});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        delete data.sales_persons;
        delete data.customers;
        delete data.autos;
        console.log("DATA:", data);

        const salesRecordUrl = 'http://localhost:8090/api/sales_records/';
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        console.log("fetchConfig:", fetchConfig)


        const response = await fetch(salesRecordUrl, fetchConfig);
        if (response.ok) {
            const newSalesRecord = await response.json();
            console.log(newSalesRecord);

            const cleared = {
                automobile: '',
                sales_person: '',
                customer: '',
                sales_price: '',
            }
            this.setState(cleared);
        }
    }


    async componentDidMount() {
        const salesPersonsUrl = 'http://localhost:8090/api/sales_persons/';
        const customersUrl = 'http://localhost:8090/api/customers/';
        const automobilesUrl = 'http://localhost:8100/api/automobiles/';


        const responseSalesPersons = await fetch(salesPersonsUrl);
        const responseCustomers = await fetch(customersUrl);
        const responseAutomobiles = await fetch(automobilesUrl);




        if (responseSalesPersons.ok && responseCustomers.ok && responseAutomobiles.ok) {

            const data1 = await responseSalesPersons.json();
            this.setState({sales_persons: data1.sales_persons});

            const data2 = await responseCustomers.json();
            this.setState({customers: data2.customers});

            const data3 = await responseAutomobiles.json();
            this.setState({autos: data3.autos});
        }
    }



    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Add a sales record</h1>
                        <form onSubmit={this.handleSubmit} id="create-sale-record-form">      
                            <div className="mb-3">
                                <select onChange={this.handleSalesPersonChange} required name="sales_persons" id="sales_persons" className="form-select" value={this.state.sales_person}>
                                    <option value="">Choose a sales person</option>
                                        {this.state.sales_persons.map(sales_person => {return (
                                            <option key ={sales_person.employee_number} value={sales_person.id}>
                                                {sales_person.name}
                                            </option>
                                        )})}
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleCustomerChange} required name="customer" id="customer" className="form-select" value={this.state.customer}>
                                    <option value="">Choose a customer</option>
                                        {this.state.customers.map(customer => {return (
                                            <option key ={customer.phone_number} value={customer.id}>
                                                {customer.name}
                                            </option>
                                        )})}        
                                </select>
                            </div>
                            <div className="mb-3">
                                <select onChange={this.handleAutomobileChange} required name="automobile" id="automobile" className="form-select" value={this.state.auto}>
                                    <option value="">Choose an automobile</option>
                                        {this.state.autos.map(automobile => {
                                            return (
                                                <option key={automobile.href} value={automobile.id}>
                                                    {automobile.model.manufacturer.name} | {automobile.model.name} - {automobile.vin}
                                                </option>
                                            )
                                        })}
                                </select>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleSalesPriceChange} placeholder="Sales price XXXXX.XX" type="number" required name="sales_price" id="sales_price" className="form-control" value={this.state.sales_price} />
                                <label htmlFor="sales_price">Sales price</label>        
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>                 
        )
    }
}

export default SalesRecordForm;