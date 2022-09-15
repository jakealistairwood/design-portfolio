import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ elRef }) => {
    return (
        <nav className="navbar container" ref={elRef}>
            <div className="navbar__links">
                <a className="navbar__logo" href="#">
                    <img src={Logo} alt="jake alistair wood" />
                </a>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Portfolio</a>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            {/* <button className="navbar__btn">Contact</button> */}
        </nav>
    );
};

export default Navbar;
