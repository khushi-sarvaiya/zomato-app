import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fooditems from "./Pages/FoodItems/Fooditems";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foodItems" element={<Fooditems />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
