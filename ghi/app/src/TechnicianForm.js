import React from 'react';

class TechnicianForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
        };

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeName(event) {
        const value = event.target.value;
        this.setState({name: value})
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
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
                name: "",
            });
        }

    }

    render() {
        return (
            <><div className="my-5 container">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h2 className="text-center">Create Technician</h2>
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