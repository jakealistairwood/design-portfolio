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
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";

const App = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [navHeight, setNavHeight] = useState(0);

    const ref = useRef(null);

    const [focusedStates, setFocusedStates] = useState({
        project1: false,
        project2: false,
        project3: false,
        project4: false,
        project5: false,
        project6: false,
        project7: false,
        project8: false,
    });

    useEffect(() => {
        console.log(ref.current.clientHeight);
        setNavHeight(ref.current.clientHeight);
    });

    return (
        <>
            {/* <nav className="navbar container">
                <a className="navbar__logo" href="#">
                </a>
                </nav>
              <header className="hero"></header> */}
            <Navbar elRef={ref} />
            <div className="hero__img">
                <img src={ECFImg} alt="" />
            </div>
            <header
                className="hero container"
                style={{
                    height: `calc(100vh - ${navHeight}px)`,
                }}
            >
                <footer className="hero__footer container">
                    <div className="hero__footer-info">
                        <h2>UI DESIGNER | CREATIVE DEVELOPER</h2>
                        <p>jakealistairwood@gmail.com</p>
                        <p>Bristol, UK</p>
                    </div>
                    <a className="hero__footer-scroll" href="">
                        <span>Scroll Down</span>
                        <div></div>
                    </a>
                </footer>
            </header>
            <main>
                <section className="portfolio">
                    <h3>
                        Recent <span className="italic">Work</span>
                    </h3>
                    <div className="projects">
                        {projects.map(project => {
                            return (
                                <div
                                    className={`project project--${project.gridArea} card`}
                                >
                                    {/* <div
                                        className="project__img"
                                        onMouseEnter={() => setIsFocused(true)}
                                        onMouseLeave={() => setIsFocused(false)}
                                        style={{
                                            backgroundColor: isFocused
                                                ? "#fff"
                                                : "#e8eaef",
                                        }}
                                    > */}
                                    <div
                                        className="project__img"
                                        onMouseEnter={event => {
                                            console.log(focusedStates);
                                            setFocusedStates({
                                                ...focusedStates,
                                                [event.target.attributes[2]
                                                    .value]: true,
                                            });
                                        }}
                                        onMouseLeave={event => {
                                            setFocusedStates({
                                                ...focusedStates,
                                                [event.target.attributes[2]
                                                    .value]: false,
                                            });
                                        }}
                                        // style={{
                                        //     backgroundColor: focusedStates.
                                        //         ? "#000"
                                        //         : "#fff",
                                        // }}
                                    >
                                        <img
                                            src={project.thumbnail.src}
                                            alt={project.thumbnail.alt}
                                            dataset-id={`project${project.id}`}
                                        />
                                    </div>
                                    {/* <h4>{project.title}</h4> */}
                                </div>
                            );
                        })}
                    </div>
                    <a href="">
                        <button>View My Work</button>
                    </a>
                </section>
                <section className="blog">
                    <h4>Latest Blog</h4>
                    <div className="blog__articles">
                        {blog.map(article => {
                            return (
                                <div className="article">
                                    <img src={article.thumbnailImg} alt="" />
                                    <h6>{article.categories.join(" | ")}</h6>
                                    <div className="article__header">
                                        <h5>{article.title}</h5>
                                        <img src={ArrowRightUp} alt="" />
                                    </div>
                                    <p className="article__excerpt">
                                        {article.excerpt}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className="contact">
                    <div className="contact__heading">
                        <h2></h2>
                    </div>
                </section>
                {/* <section className="about">
                    <div className="about__heading">
                        <h4>my mission</h4>
                        <h1>
                            Produce <span>Simple</span> Yet{" "}
                            <span>Captivating</span> Digital Experiences For{" "}
                            <span>All</span>
                        </h1>
                    </div>
                </section> */}
            </main>
            <Footer />
        </>
    );
};

export default App;
