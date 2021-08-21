import Search from "../../components/Search/search"
import clasess from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={clasess.navbarContainer}>

            <div className="container-fliud container-md ">
                <Search icon placeholder="Search Item" />
            </div>

        </div>
    );
}

export default Navbar;