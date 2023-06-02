import Navbar from "../components/Navbar";
import './App.css';
import { Route, Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Category from "./routes/Category";
import Collections from "./routes/Collections";
import Contactus from "./routes/Contactus";

function App() {

    return(
<div className='App'>
<Router>
    <Routes>

    <Navbar/>

        <Route path="/" element={<Home />} />;
        <Route path="/category" element={<Category />} />;
        <Route path="/collections" element={<Collections />} />;
        <Route path="/contactus" element={<Contactus />} />;
         
    </Routes> 
     </Router>
</div>

    );
}
export default  App;