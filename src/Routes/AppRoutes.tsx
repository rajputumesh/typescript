import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Shop from "../Pages/Shop";

const AppRoutes: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop id={0} title={""} routeName={""} />} />
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
