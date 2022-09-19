import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import HeroImg from "../../assets/images/ecf-mobile.svg";
import ArrowRightUp from "../../assets/images/arrow-right-up.svg";
import { projects, blog } from "../../portfolio";
import BlogThumbnail from "../../components/BlogThumbnail/BlogThumbnail";

const Home = ({ navHeight }) => {
    const [isFocused, setIsFocused] = useState(false);

    console.log(navHeight);

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

    return (
        <>
            <div className="hero__img">
                <img src={HeroImg} />
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
            <main className="main">
                <section className="portfolio">
                    <h3>
                        Recent <span className="italic">Work</span>
                    </h3>
                    <div className="projects">
                        {projects.map(project => {
                            return (
                                <Link
                                    to={`/portfolio/${project.id}`}
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
                                </Link>
                            );
                        })}
                    </div>
                    <a href="">
                        <button>View My Work</button>
                    </a>
                </section>
                <section className="blog-posts">
                    <h4>Latest Blog</h4>
                    <div className="blog__articles">
                        {blog.map(article => {
                            return (
                                <BlogThumbnail
                                    article={article}
                                    width={"400px"}
                                />
                            );
                        })}
                    </div>
                </section>
                <section className="contact">
                    <div className="contact__heading">
                        <h2></h2>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
