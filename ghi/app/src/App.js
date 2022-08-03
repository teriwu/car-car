import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import ManufacturersList from './ManufacturersList';
import ManufacturerForm from './ManufacturerForm';
import SalesPersonForm from './SalesPersonForm';
import CustomerForm from './CustomerForm';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/manufacturers/new" element={<ManufacturerForm />} />
          <Route path="/manufacturers" element={<ManufacturersList />} />
          <Route path="/salesperson/new" element={<SalesPersonForm />} />
          <Route path="/customer/new" element={<CustomerForm />} />          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
