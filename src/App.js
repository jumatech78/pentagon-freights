// import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/loginpage';
import Dashboard from './pages/dashboard';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'
import HomePage from './pages/home';
import About from './pages/about'
import Contact from './pages/contact'
import Faqs from './pages/faqs'
import Support from './pages/support'
function App() {
  return (
    // <div>
    //   <Products/>
    // </div>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="dashboard" element={<Dashboard />} />
      {/* <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="faqs" element={<Faqs />} />
      <Route path="support" element={<Support />} /> */}
    </Routes>
  );
}

export default App;
