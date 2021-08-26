import { Route, Switch } from "react-router-dom";
import SimpleSlider from "../components/Sliders/ReactSlick/slider";
import Footer from "../parts/Footer/footer";
import Header from './../parts/Header/header';
import ListView from './../parts/ListView/listView';
import Slider from "../components/Sliders/SliderOne/Slider"
// import Slider from "../components/Sliders/CustomSlider/slider";

const Layout = () => {
    return (
        <div>

            <Header />
            <div>
                {/* <Slider /> */}
            </div>
            {/* <Slider /> */}
            <SimpleSlider />

            <Switch>
                {/* <Route path="/list" ><ListView /></Route> */}
                {/* <Route path="/" ></Route> */}
            </Switch>
            <Footer />
        </div>
    );
}

export default Layout;