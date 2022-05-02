

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from "./components/pages/Home";
import Faq from "./components/pages/FAQ";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import NewProject from "./components/pages/NewProject";
import Projects from './components/pages/Projects'

import NavBar from "./components/layout/Header/NavBar";
import Footer from "./components/layout/Footer/Footer";

import "aos/dist/aos.css";
import AOS from "aos";




  function App() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);

  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' exact="true" element={<Home/>}></Route>
          <Route path='/faq' element={<Faq/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/newproject' element={<NewProject/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
      <Footer/>
    </BrowserRouter>

    
  );
  
}

export default App;
