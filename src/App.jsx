import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";




const App=()=>{
  return(
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;