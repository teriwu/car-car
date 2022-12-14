import { NavLink } from 'react-router-dom';

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>

            {/* Inventory drop down menu */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link active dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Inventory
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" aria-current="page" to="manufacturers/new/">Create Manufacturer</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="manufacturers/">Manufacturers List</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="models/new">Create Vehicle Model</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="models">List Vehicle Models</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="automobiles/new">Create Automobile</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="automobiles">List Automobiles</NavLink>
              </div>
            </li>
            
            {/* Sales dropdown menu */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link active dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sales
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" to="salesperson/new/">Create Sales Person</NavLink>
                <NavLink className="dropdown-item" to="customer/new/">Create Customer</NavLink>
                <NavLink className="dropdown-item" to="salesrecord/new/">Create Sales Record</NavLink>
                <NavLink className="dropdown-item" to="saleslist/">Sales Records</NavLink>
                <NavLink className="dropdown-item" to="employeesaleslist/">Employee Sales Records</NavLink>
              </div>
            </li>

            {/* Service drop down menu */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link active dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Service
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" aria-current="page" to="/technicians/new">Create Technician</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/appointments/new">Create Appointment</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/appointments">Service Appointments</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
