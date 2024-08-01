import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Restaurant from "./Pages/Restaurant/Restaurant";
import Fooditems from "./Pages/Fooditems/Fooditems";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />}></Route>
          <Route path="/foodItems/:id" element={<Fooditems />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
