import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';
import SalesRecordForm from './SalesRecordForm';
import SalesList from './SalesList';
import EmployeeSalesList from './EmployeeSalesList';
import VehicleModelsList from './VehicleModelsList';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/vehiclemodels" element={<VehicleModelsList />} />
          <Route path="/salesperson/new" element={<SalesPersonForm />} />
          <Route path="/customer/new" element={<CustomerForm />} />    
          <Route path="/salesrecord/new" element={<SalesRecordForm />} /> 
          <Route path="/saleslist" element={<SalesList />} />  
          <Route path="/employeesaleslist" element={<EmployeeSalesList />} />        
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
