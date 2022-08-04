import React from 'react';

class TechnicianForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // employee_number: "",
            name: "",
        };
        // this.handleChangeEmployeeNumber = this.handleChangeEmployeeNumber.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleChangeEmployeeNumber(event) {
    //     const value = event.target.value;
    //     this.setState({employeeNumber: value})
    // }

    handleChangeName(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        // data.employee_number = data.employeeNumber;
        // delete data.employeeNumber;
        console.log(data);

        const technicianUrl = "http://localhost:8080/api/technicians/";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
            },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();
            console.log("new technician:", newTechnician);
            this.setState({
                // employee_number: "",
                name: "",
            });
        }

    }

    render() {
        return (
            <><div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new technician</h1>
                        <form onSubmit={this.handleSubmit} id="create-technician-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleChangeName} value={this.state.name} placeholder="Name" required type="text" name="name" id="name" className="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container">
                <img className="center-block" width="200" src="https://i.imgur.com/S3dtNY4.png" />
            </div></>
        )
    }
}

export default TechnicianForm;