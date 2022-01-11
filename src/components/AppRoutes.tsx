import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from 'react-router';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
        </Routes>
    )
}
export default AppRoutes;