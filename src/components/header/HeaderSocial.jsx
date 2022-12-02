import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"

export default function HeaderSocial() {

    return(
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/kehindea/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/LegatoReign" target="_blank" rel="noreferrer"><FaGithub/></a>
            {/* <a href="http://dribble.com" target="_blank" rel="noreferrer"><FiDribbble/></a> */}
        </div>
    )
}