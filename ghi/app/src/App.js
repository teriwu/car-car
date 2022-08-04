import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import AppointmentForm from "./AppointmentForm";
import AppointmentsList from "./AppointmentList";
import TechnicianForm from "./TechnicianForm";


function App(props) {
  // if (props.appoints === undefined) {
  //   return null;
  // }

  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments">
            <Route index element={<AppointmentsList appointments={props.appointments} />}/>
            <Route path="new" element={<AppointmentForm />} />
          </Route>
          <Route path="technicians">
            <Route path="new" element={<TechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
