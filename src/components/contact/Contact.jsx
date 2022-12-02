import React from "react";
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import  { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ibxic0g', 'template_bix8n8n', form.current, 'prIaPnd6YShE4A48W')

    e.target.reset()
    };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    {/* <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>Kehinde@gmail.com</h5>
                        <a href="mailto:kehinde@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Messager</h4>
                        <h5>Kehinde@gmail.com</h5>
                        <a href="mailto:kehinde@gmail.com">Send a message</a>
                    </article> */}
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>kehinde.adegbamigbe@gmail.com </h5>
                        <a href="mailto:kehinde.adegbamigbe@gmail.com">Send a message</a>
                    </article>
                </div>
                {/* End Of Contact */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="7" required></textarea>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}