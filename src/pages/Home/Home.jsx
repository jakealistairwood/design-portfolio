import React from "react";

const Home = () => {
    return (
        <>
            <nav className="navbar container">
                <div className="navbar__links">
                    <a className="navbar__logo" href="#">
                        <img src={Logo} alt="jake alistair wood" />
                    </a>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* <button className="navbar__btn">Contact</button> */}
            </nav>
            <header className="hero">
                {/* <img
                    className="hero__bg-image"
                    src={ECFImg}
                    alt="hero image of the future hub project"
                /> */}
                <div className="hero__banner container">
                    <img src={ECFImg} alt="" />
                </div>
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
                                    <div
                                        className="project__img"
                                        onMouseEnter={() => setIsFocused(true)}
                                        onMouseLeave={() => setIsFocused(false)}
                                        style={{
                                            backgroundColor: isFocused
                                                ? "#fff"
                                                : "#e8eaef",
                                        }}
                                    >
                                        <img
                                            src={project.thumbnail.src}
                                            alt={project.thumbnail.alt}
                                        />
                                    </div>
                                    {/* <h4>{project.title}</h4> */}
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className="about">
                    <h1>
                        Produce <span>Simple</span> Yet <span>Captivating</span>{" "}
                        Digital Experiences For <span>All</span>
                    </h1>
                </section>
            </main>
        </>
    );
};

export default Home;
