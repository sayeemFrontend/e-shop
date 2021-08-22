import classes from "./menubar.module.css"
import logo from "./../../../assets/Images/logo.png"
import MenuList from "./MenuList/menuList"
import { useState } from 'react';


const Menubar = () => {
    const [activeId, setActiveId] = useState(1)
    const menuList = [{ id: 1, title: "All Shops" }, { id: 2, title: "Top Up" }, { id: 3, title: "Gift Cards" }, { id: 4, title: "Express" }, { id: 5, title: "News Feed" }, { id: 6, title: "Contact Us" }, { id: 7, title: "About Us" }]
    return (
        <div className={classes.menubar} >
            <div className="container-fluid container-md">
                <div className="d-flex align-items-center justify-content-between">
                    <div className={"px-2 d-flex align-items-center " + classes.logo}>
                        <img src={logo} alt="alt" />
                    </div>

                    <div className={"d-flex align-items-center justify-content-between " + classes.menuItemsConatiner}>
                        <MenuList menuList={menuList} onClicked={(id) => setActiveId(id)} activeId={activeId} />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Menubar;