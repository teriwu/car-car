import React from "react";

function AppointmentsList(props) {
    const options = {timeZone: "UTC", year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit"};
    return (
        <div>
            <h2>Service Appointment</h2>
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
                            <tr key={ (appointment.id) }>
                                <td>{ (appointment.vip ? "True" : "") }</td>
                                <td>{ appointment.vin }</td>
                                <td>{ appointment.customer_name }</td>
                                {/* <td>{ new Date(appointment.date_time).toLocaleDateString() } { new Date(appointment.date_time).toLocaleTimeString() }</td> */}
                                <td>{ new Date(appointment.date_time).toLocaleTimeString([], options) }</td>
                                <td>{ appointment.technician }</td>
                                <td>{ appointment.reason }</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AppointmentsList;