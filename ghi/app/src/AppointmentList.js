import React, { useEffect, useState } from "react";

async function handleDelete(e) {
    const id = e.target.value;
    await fetch (`http://localhost:8080/api/appointments/${id}/`, {method: "DELETE"})    
}
        
function AppointmentList(props) {
    const options = {timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"};
            
    const [appointments, setAppointments] = useState([]);
    const [search, setSearch] = useState("");
    
    // useEffect((props) => {
    //     props.appointments.vin = `${search}`;
    // });
    // function handleChange(e) {
    // }
    
    // function handleSearch(e) {
    //     setSearch(e.target.value);        
    // }

    return (
        <>
            <div className="my-3 containerw">
                <div class="input-group">
                    <input type="search" class="form-control rounded" placeholder="VIN" aria-label="Search" aria-describedby="search-addon" />
                    <button type="button" class="btn btn-outline-secondary">Search VIN</button>
                </div>
            </div>

            <div>
                <h1 className="float-right">Service Appointments</h1>

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
                        {/* How to console.log JSX */}
                        {/* {console.log(props.appointments)} */}
                        {props.appointments.map(appointment => {
                            return (
                                <tr key={ appointment.id }>
                                    <td>{ (appointment.vip ? "True" : "") }</td>
                                    {/* <td>{ appointment.id }</td> */}
                                    <td>{ appointment.vin }</td>
                                    <td>{ appointment.customer_name }</td>
                                    <td>{ new Date(appointment.date_time).toLocaleTimeString([], options) }</td>
                                    <td>{ appointment.technician }</td>
                                    <td>{ appointment.reason }</td>
                                    <td>
                                        <button onClick={handleDelete} type="submit" value={ appointment.id } className="mx-1 btn btn-danger">Cancel</button>
                                        <button onClick={handleDelete} type="button" value={ appointment.id } className="mx-1 btn btn-success">Finish</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AppointmentList;