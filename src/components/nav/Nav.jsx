import React from "react";
import "./nav.css"
import { HiOutlineHome } from "react-icons/hi"
import { AiOutlineUser } from "react-icons/ai"
import { BiBook } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import { BiMessageSquareDetail } from "react-icons/bi"
import { useState } from "react";

export default function Nav() {

    const [activeNav, setActiveNav] = useState("#");
    
    return(
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? "active" : ""}><HiOutlineHome /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === "#experience" ? "active" : ""}><BiBook /></a>
            <a href="#porfolio" onClick={() => setActiveNav('#porfolio')} className={activeNav === "#porfolio" ? "active" : ""}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail /></a>
        </nav>
    )
}