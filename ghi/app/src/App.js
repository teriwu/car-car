import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentForm from "./AppointmentForm";
import AppointmentList from "./AppointmentList";
import TechnicianForm from "./TechnicianForm";
import ModelForm from "./ModelForm";


function App(props) {

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments" element={<AppointmentList appointments={props.appointments} />}/>
          <Route path="appointments/new" element={<AppointmentForm />} />
          <Route path="technicians/new" element={<TechnicianForm />} />
          <Route path="models/new" element={<ModelForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
