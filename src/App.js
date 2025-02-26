import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactPage from './pages/contactPage';
import Homepage from './pages/homePage';
import AboutPage from './pages/aboutUsPage';
import ServicesPage from './pages/servicesPage';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
             {/* default redirect to home page */}
            <Route path="*" element={<Navigate to="/homepage" />} />
         </Routes>
    </div>
  );
}

export default App;
