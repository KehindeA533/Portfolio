import React from "react";
import "./about.css"
import ME from "../../assests/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

export default function About() {

    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} />
                    </div>
                </div>
                <div className="about__content">
                    {/* <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon"/>
                            <h5>Experience</h5>
                            <small>3+ Years</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon"/>
                            <h5>Clients</h5>
                            <small>200+ worldwide</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon"/>
                            <h5>Projects</h5>
                            <small>80+ Projects</small>
                        </article>
                    </div> */}
                    <p>
                    Hi my name is Kehinde, I’m a highly motivated, self-starting solidity developer who is continuously learning and growing. I'm proficient in Solidity,  Ethers.js, Hardhat, JavaScript, and TailwindCSS and knowledgeable on blockchain technology. I've always strive to be the best in whatever I’m doing, whether I’m learning from scratch or building on my skill. I like things that challenge me, bring out my creative side, and teach me  something new. I look forward to contributing to the web3 ecosystem.
                    </p>

                    <a href="#contact" className="btn btn-primary">Lets talk</a>
                </div>
            </div>
        </section>
    )
}