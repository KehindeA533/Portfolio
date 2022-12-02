import React from "react";
import "./header.css"
import CTA from "./CTA"
import HeaderSocial from "./HeaderSocial"
import ME from "../../assests/me.png"


export default function Header() {

    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Kehinde Adegbamigbe</h1>
                <h5 className="text-light">Blockchain Developer</h5>
                <CTA />

                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>

                <HeaderSocial />
            </div>
        </header>
    )
}