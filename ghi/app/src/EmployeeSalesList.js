import React from "react";

class EmployeeSalesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sales_persons: [],
            sales_records_list: [],
        }
        this.handleSalesPersonChange = this.handleSalesPersonChange.bind(this);
    }


    async handleSalesPersonChange(event) {
        const value = event.target.value;
        // console.log({ value });

        const url = `http://localhost:8090/api/sales_persons/${value}/sales`;

        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({ sales_records_list: data.sales_records })
        }
    }


    async componentDidMount() {
        const salesRecordsUrl = "http://localhost:8090/api/sales_records/";
        const responseSalesRecords = await fetch(salesRecordsUrl);
        
        const salesPersonUrl = "http://localhost:8090/api/sales_persons/";
        const responseSalesPerson = await fetch(salesPersonUrl);
        
        if (responseSalesPerson.ok && responseSalesRecords.ok) {
            const salesPersonData = await responseSalesPerson.json();
            this.setState({sales_persons: salesPersonData.sales_persons});

            const salesRecordsData = await responseSalesRecords.json();
            this.setState({sales_records: salesRecordsData.sales_persons});
        }
    }

    render() {
        return (
            <>
                <div className="row">
                    <form id="create-sale-record-form">     
                    <div className="mb-3">
                        <select onChange={this.handleSalesPersonChange} required name="sales_persons" id="sales_persons" className="form-select" value={this.state.sales_person}>
                            <option value="">Choose a sales person</option>
                                {this.state.sales_persons.map(sales_person => {return (
                                    <option key = {sales_person.employee_number} value={sales_person.employee_number}>
                                        {sales_person.name}
                                    </option>
                                )})}
                        </select>
                    </div>
                    </form>
                </div>

                <div>
                    <h3>Sales Record History</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Sales Person</th>
                                <th>Customer</th>
                                <th>VIN</th>
                                <th>Sales Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sales_records_list.map((sales_record, index) => {
                                return(
                                    <tr style={sales_record} key={index}>
                                        <td>{sales_record.sales_person.name}</td>
                                        <td>{sales_record.customer.name}</td>
                                        <td>{sales_record.automobile.vin}</td>
                                        <td>${sales_record.sales_price}</td>
                                    </tr>
                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </>
            )
        }
    }

export default EmployeeSalesList;

