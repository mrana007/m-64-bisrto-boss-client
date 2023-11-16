import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/Navbar/navbar";


const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;