import React from 'react';

class CustomerForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: "",
            address: "",
            phone_number: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleAddressChange = this.handleAddressChange.bind(this)
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    handleAddressChange(event) {
        const value = event.target.value;
        this.setState({address: value})
    }

    handlePhoneNumberChange(event) {
        const value = event.target.value;
        this.setState({phone_number: value})
    }
    

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        console.log("DATA:", data);


        const customerUrl = 'http://localhost:8090/api/customers/';
        const fetchConfig = {
          method: "post",
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
          },
        };

        
        const response = await fetch(customerUrl, fetchConfig);
        if (response.ok) {
          const newPerson = await response.json();
          console.log(newPerson);

          const cleared = {
            name: "",
            address: "",
            phone_number: "",
          };
          this.setState(cleared);
        }
    }
    

    render () {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a Customer</h1>
                        <form onSubmit={this.handleSubmit} id="create-customer-form">
                        <div className="form-floating mb-3">
                            <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control"/>
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handleAddressChange} value={this.state.address} placeholder="Address" required type="text" name="address" id="address" className="form-control"/>
                            <label htmlFor="address">Address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={this.handlePhoneNumberChange} value={this.state.phone_number} placeholder="Phone Number" required type="text" name="phone_number" id="phone_number" className="form-control"/>
                            <label htmlFor="phone_number">Phone Number</label>
                        </div> 
                        <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerForm;
