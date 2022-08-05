import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Reviews from './Pages/Reviews/Reviews';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className='max-w-8xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/appointment" element={<Appointment></Appointment>}/>
        <Route path="/reviews" element={<Reviews></Reviews>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/login" element={<Login></Login>}/>
      </Routes>
    </div>
  );
}

export default App;
