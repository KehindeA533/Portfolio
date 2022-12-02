import React from "react";
import "./services.css"
import {BiCheck} from "react-icons/bi"

export default function Services() {

    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
{/* UX/UI Design*/}
                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
{/* UX/UI Design list Begins Here */}
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

{/* Web Development*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
{/* Web Development list Begins Here */}
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>

{/* Content Creation*/}
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
{/* Content Creation list Begins Here */}
                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}