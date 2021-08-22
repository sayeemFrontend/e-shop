import { Route, Switch } from "react-router-dom";
import Footer from "../parts/Footer/footer";
import Header from './../parts/Header/header';

const Layout = () => {
    return (
        <div>

            <Header />

            <Switch>
                <Route path="/" ></Route>
                {/* <Route path="/" ></Route> */}
            </Switch>
            <Footer />
        </div>
    );
}

export default Layout;