import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import Searched from "./Searched";
import Recipie from "./Recipie";

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cuisine/:cuisine" element={<Cuisine />} />
      <Route exact path="/searched/:search" element={<Searched />} />
      <Route exact path="/recipe/:name" element={<Recipie />} />
    </Routes>
  );
}

export default Pages;
