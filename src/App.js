import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Collections from './pages/Collections/Collections';
import Contactus from './pages/Contactus/Contactus';
import Signup from './pages/Signup/Signup';

function App() {
  return(
<> 


<BrowserRouter>
<Navbar/> 
    <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/category" element={<Category/>} />;
        <Route path="/collections" element={<Collections />} />;
        <Route path="/contactus" element={<Contactus />} />;    
        <Route path="/signup" element={<Signup />} />;  
    </Routes>
    </BrowserRouter>
    </>
    );
}
export default  App;