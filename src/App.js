import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import ContactPage from './pages/contactPage';
import Homepage from './pages/homePage';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
            <Route path="/contact" element={<ContactPage />} />
            
             {/* default redirect to home page */}
            <Route path="*" element={<Navigate to="/" />} />
         </Routes>
    </div>
  );
}

export default App;
