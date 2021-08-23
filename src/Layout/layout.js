import { Route, Switch } from "react-router-dom";
import Footer from "../parts/Footer/footer";
import Header from './../parts/Header/header';
import ListView from './../parts/ListView/listView';

const Layout = () => {
    return (
        <div>

            <Header />

            <Switch>
                {/* <Route path="/list" ><ListView /></Route> */}
                {/* <Route path="/" ></Route> */}
            </Switch>
            <Footer />
        </div>
    );
}

export default Layout;