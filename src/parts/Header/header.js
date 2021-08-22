import classes from "./header.module.css"
import Menubar from "./Menubar/menubar";
import Navbar from "./Navbar/navbar";
import Topbar from './Topbar/topbar';

const Header = () => {
    return (
        <div>
            <Topbar />
            <Menubar />
            <Navbar />
        </div>
    );
}

export default Header;