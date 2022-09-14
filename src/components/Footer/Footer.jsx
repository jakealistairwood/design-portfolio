import React from "react";
import "./Footer.scss";
import Logo from "../../assets/images/logo.svg";
import { ReactComponent as DribbbleIcon } from "../../assets/images/dribbble.svg";
import { ReactComponent as UplabsIcon } from "../../assets/images/uplabs.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/images/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/images/github.svg";
import { ReactComponent as FrontEndMentorIcon } from "../../assets/images/fem.svg";
import { ReactComponent as MediumIcon } from "../../assets/images/medium.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__left">
                <img src={Logo} alt="" />
                <div className="social-icons">
                    <DribbbleIcon />
                    <UplabsIcon />
                    <LinkedInIcon />
                    <GithubIcon />
                    <FrontEndMentorIcon />
                    <MediumIcon />
                </div>
            </div>
            <div className="footer__middle">
                <ul className="footer__nav-links">
                    <li className="footer__nav-link">
                        <a href="">Home</a>
                    </li>
                    <li className="footer__nav-link">
                        <a href="">Portfolio</a>
                    </li>
                    <li className="footer__nav-link">
                        <a href="">Blog</a>
                    </li>
                    <li className="footer__nav-link">
                        <a href="">Contact</a>
                    </li>
                </ul>
                <small>Jake Alistair Wood | All Rights Reserved.</small>
            </div>
            <div className="footer__right"></div>
        </footer>
    );
};

export default Footer;
