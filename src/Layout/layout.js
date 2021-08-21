import { Route, Switch } from "react-router-dom";
import Footer from "../parts/Footer/footer";
import Navbar from "../parts/Navbar/navbar";

const Layout = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Switch>
                    <Route path="/" ></Route>
                    {/* <Route path="/" ></Route> */}

                </Switch>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Layout;