import { useState, useRef } from "react";
import Logo from "./assets/images/logo.svg";
import HeroImg from "./assets/images/hero-img.svg";
import ECFImg from "./assets/images/ecf-mobile.svg";
import HeroBanner from "./assets/images/hero-banner.svg";
import DribbbleIcon from "./assets/images/dribbble.svg";
import ArrowRightUp from "./assets/images/arrow-right-up.svg";
import "./App.scss";
import { blog, projects } from "./portfolio";
import { Link } from "react-router-dom";
import Routes from "./routes/Routes";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";

const App = () => {
    const [navHeight, setNavHeight] = useState(0);

    const ref = useRef(null);

    useEffect(() => {
        console.log(ref.current.clientHeight);
        setNavHeight(ref.current.clientHeight);
    });

    return (
        <>
            <Navbar elRef={ref} />
            <Routes navHeight={navHeight} />
            <Footer />
        </>
    );
};

export default App;
