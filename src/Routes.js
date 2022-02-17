import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";

export default (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
