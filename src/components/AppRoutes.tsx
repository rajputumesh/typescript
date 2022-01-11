import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const AppRoutes = () =>{
    return (
        <Routes>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Routes>
    )
}
export default AppRoutes;