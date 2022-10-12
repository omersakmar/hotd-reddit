import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ASOIAF from "../pages/ASOIAF";
import Freefolk from "../pages/Freefolk";
import HouseOfTheDragon from "../pages/HouseOfTheDragon";
const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/freefolk" element={<Freefolk />} />
      <Route path="/hotd" element={<HouseOfTheDragon />} />
      <Route path="/asoiaf" element={<ASOIAF />} />
    </Routes>
  );
};

export default AppRoutes;
