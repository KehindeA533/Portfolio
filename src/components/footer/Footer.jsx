import React from "react";
import "./footer.css"
import { FiFacebook } from "react-icons/fi"
import { FiLinkedin } from "react-icons/fi"
import { FiGithub } from "react-icons/fi"

export default function Footer() {

    return(
        <footer>
            <a href="#" className="footer__logo">Kehinde. A</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experince">Experinence</a></li>
                {/* <li><a href="#services">Services</a></li> */}
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="testimonals">Testimonals</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                {/* <a href="https://www.facebook.com"><FiFacebook /></a> */}
                <a href="https://www.linkedin.com/in/kehindea/"><FiLinkedin/></a>
                <a href="https://github.com/LegatoReign"><FiGithub/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Kehinde. All rights reserved. 2022 </small>
            </div>
        </footer>
    )
}