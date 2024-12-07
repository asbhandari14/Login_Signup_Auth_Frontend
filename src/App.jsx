import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";




const App=()=>{
  const backend_url = "https://login-signup-auth-backend.onrender.com";
  return(
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login url={backend_url} />} />
        <Route path="/signup" element={<Signup url={backend_url} />} />
        <Route path="/home" element={<Home url={backend_url} />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;