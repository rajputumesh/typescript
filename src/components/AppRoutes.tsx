import { Route } from "react-router-dom";
import { Routes } from 'react-router';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/home" />
            <Route path="/about" />
            <Route path="/contact" />
        </Routes>
    )
}
export default AppRoutes;