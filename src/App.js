import './App.css';

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Category from './pages/Category/Category';
import Collections from "./routes/Collections";
import Contactus from "./routes/Contactus";

function App() {
  return(
<> 


<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />;
        <Route path="/category" element={<Category />} />;
        <Route path="/collections" element={<Collections />} />;
        <Route path="/contactus" element={<Contactus />} />;     
    </Routes>
    </BrowserRouter>
    </>
    );
}
export default  App;