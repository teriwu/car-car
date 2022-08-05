import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentForm from "./AppointmentForm";
import AppointmentsList from "./AppointmentsList";
import TechnicianForm from "./TechnicianForm";
import ModelForm from "./VehicleModelForm";
import SearchForm from './SearchAppointments';


function App(props) {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models/new" element={<ModelForm />} />
          <Route path="appointments" element={<AppointmentsList appointments={props.appointments} />}/>
          <Route path="appointments/new" element={<AppointmentForm />} />
          <Route path="technicians/new" element={<TechnicianForm />} />
          <Route path="appointments/search" element={<SearchForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
