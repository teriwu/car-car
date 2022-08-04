import React from "react";

class SalesList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {sales_records: []}
    }

    async componentDidMount() {
        const url = "http://localhost:8090/api/sales_records/";

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            // console.log("DATA:", data);
            this.setState({sales_records : data.sales_records})
        }
    }

    render() {
        return (
            <>
                <h1>Sales Records</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th>Sales Person</th>
                        <th>Customer</th>
                        <th>Vin</th>
                        <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sales_records.map((sales_record, index) => {
                            return (
                                <tr style={sales_record} key={ index }>
                                    <td>{ sales_record.sales_person.name }</td>
                                    <td>{ sales_record.customer.name }</td>
                                    <td>{ sales_record.automobile.vin }</td>
                                    <td>${ sales_record.sales_price}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default SalesList;

