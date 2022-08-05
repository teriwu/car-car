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
<<<<<<< HEAD
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="manufacturers/">Manufacturers List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="manufacturers/new/">Create Manufacturer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="vehiclemodels/">Vehicle Models</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="automobiles/">Automobiles List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="automobiles/new">Create Automobile</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="salesperson/new/">Create Sales Person</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="customer/new/">Create Customer</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="salesrecord/new/">Create Sales Record</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="saleslist/">Sales Records</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="employeesaleslist/">Employee Sales Records</NavLink>
              </li>
=======
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>

            {/* Inventory drop down menu */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link active dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Inventory
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" aria-current="page" to="manufcaturers/">Manufacturers List</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="manufacturers/new/">Create Manufacturer</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/automobiles">List Automobiles</NavLink>
              </div>
            </li>
            
            {/* Sales dropdown menu */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link active dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sales
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" aria-current="page" to="/models/new">New Vehicle Model</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/automobiles/new">New Automobile</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/automobiles">List Automobiles</NavLink>
              </div>
            </li>

            {/* Service drop down menu */}
            <li className="nav-item dropdown">
              <NavLink className="nav-link active dropdown-toggle" to="/" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Service
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <NavLink className="dropdown-item" aria-current="page" to="/technicians/new">New Technician</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/appointments/new">New Appointment</NavLink>
                <NavLink className="dropdown-item" aria-current="page" to="/appointments">Service Appointments</NavLink>
              </div>
            </li>
>>>>>>> 42ee184f0047742b29785451e0e0ac23c861ebc9
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
