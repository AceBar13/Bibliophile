import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import '../src/components/Navbar/Navbar.css';

import './index.css';
import Home from "./pages/Home/Home";
import About from "./pages/Category/Category";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <BrowserRouter>
 <Navbar/>
     <Routes>
        <Route path = "/" element = {<Home />}>
        <Route path = "about" element = {<About />} />
        <Route path = "book" element = {<BookList />} />
        <Route path = "book/:id" element = {<BookDetails />} />

  
      </Route>
     </Routes>
   </BrowserRouter>
  
);


