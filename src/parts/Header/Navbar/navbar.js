import classes from "./navbar.module.css"
import account from "./../../../assets/Icon/account.svg"
import notify from "./../../../assets/Icon/notify.svg"
import msg from "../../../assets/Icon/msg.svg"
import bag from "./../../../assets/Icon/bag.svg"
import downIcon from "./../../../assets/Icon/down.svg"
import menu from "./../../../assets/Icon/menu.svg"
import Search from './../../../components/Search/search';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className="container-fluid container-md">
                <div className="d-flex align-items-center justify-content-between">
                    <div className={"px-2 d-flex align-items-center " + classes.category}>
                        <img src={menu} alt="menu" />
                        <h5 className="px-3 text-white">CATEGORIES</h5>
                        <img src={downIcon} alt="downIcon" />
                    </div>

                    <div className={"px-3 " + classes.searchContainer}>
                        <Search icon placeholder="Search Item..." />
                    </div>
                    <div className={"d-flex align-items-center justify-content-between " + classes.iconsConatiner}>
                        <img src={bag} alt="bag" />
                        <img src={notify} alt="notify" />
                        <img src={msg} alt="msg" />
                        <img src={account} alt="account" />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Navbar;