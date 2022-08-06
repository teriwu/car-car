import React from 'react';

class AppointmentsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            vin: "",
            appointments: [],
        }

        this.handleChangeVin = this.handleChangeVin.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleChangeVin(event) {
        const value = event.target.value;
        this.setState({vin: value})
    }

    // Handles filtering search for vin
    async handleSearch() {
        const vin = this.state.vin;
        console.log("🚀 ~ file: SearchAppointments.js ~ line 24 ~ SearchForm ~ handleSearch ~ vin", vin)
        const response = await fetch(`http://localhost:8080/api/appointments/${vin}/`, {method: "GET"});

        if (response.ok) {
            const data = await response.json();
            console.log("🚀 ~ file: SearchAppointments.js ~ line 28 ~ SearchForm ~ handleSearch ~ data", data)
            this.setState({appointments: data.all_appointments})
        }
    }

    // Loads everything into a list on the page
    async componentDidMount() {
        const url = "http://localhost:8080/api/appointments/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({appointments: data.appointments})
        }
    }

    async handleDelete(e) {
        const id = e.target.value;
        const idResponse = await fetch(`http://localhost:8080/api/appointments/${id}/`, {method: "DELETE"})  
        console.log("🚀 ~ file: AppointmentsList.js ~ line 48 ~ AppointmentsList ~ handleDelete ~ idResponse", idResponse)
        
    }
    
    render() {
        let options = {timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"};

        return (
            <>
                <div className="my-3 containerw">
                    <div className="input-group">

                        <input onChange={this.handleChangeVin} type="search" className="form-control rounded" placeholder="VIN" aria-label="Search" aria-describedby="search-addon" maxLength="17" />

                        <button onClick={this.handleSearch} type="button" className="btn btn-outline-secondary">Search VIN</button>

                    </div>
                </div>
                <div>
                    <h1>Service Appointments</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>VIP</th>
                                <th>VIN</th>
                                <th>Customer name</th>
                                <th>Date-time</th>
                                <th>Technician</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.appointments ? this.state.appointments.map(appointment => {
                                return (    
                                    <tr key={appointment.id}>
                                        <td className="text-warning">{(appointment.vip ? "True" : null)}</td>
                                        <td>{appointment.vin}</td>
                                        <td>{appointment.customer_name}</td>
                                        <td>{new Date(appointment.date_time).toLocaleTimeString([], options)}</td>
                                        <td>{appointment.technician}</td>
                                        <td>{appointment.reason}</td>
                                        <td>
                                            <button onClick={this.handleDelete} type="submit" value={ appointment.id } className="mx-1 btn btn-danger">Cancel</button>

                                            <button onClick={this.handleDelete} type="button" value={ appointment.id } className="mx-1 btn btn-success">Finish</button>
                                        </td>
                                    </tr>
                                );
                            }) : null}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default AppointmentsList;