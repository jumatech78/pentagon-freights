// import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/loginpage';
import Dashboard from './pages/dashboard';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'
function App() {
  return (
    // <div>
    //   <Products/>
    // </div>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
  );
}

export default App;
