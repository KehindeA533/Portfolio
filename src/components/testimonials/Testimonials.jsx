import React from "react";
import "./testimonials.css"
import AVTR1 from "../../assests/avatar1.jpg"
import AVTR2 from "../../assests/avatar2.jpg"
import AVTR3 from "../../assests/avatar3.jpg"
import AVTR4 from "../../assests/avatar4.jpg"
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonials() {

    const data = [
        {
            avatar: AVTR1,
            name: "Tina Snow",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias odit animi fugit, soluta temporibus sint consequuntur repudiandae id facere rerum quis quos iure, sequi totam! Provident blanditiis harum laboriosam."
        },
        {
            avatar: AVTR2,
            name: "John Snow",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias odit animi fugit, soluta temporibus sint consequuntur repudiandae id facere rerum quis quos iure, sequi totam! Provident blanditiis harum laboriosam."
        },
        {
            avatar: AVTR3,
            name: "Will Snow",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias odit animi fugit, soluta temporibus sint consequuntur repudiandae id facere rerum quis quos iure, sequi totam! Provident blanditiis harum laboriosam."
        },
        {
            avatar: AVTR4,
            name: "Jane Snow",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic alias odit animi fugit, soluta temporibus sint consequuntur repudiandae id facere rerum quis quos iure, sequi totam! Provident blanditiis harum laboriosam."
        }
    ]

    return(
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonals__container"
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar,name,review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonals">
                                <div className="client__avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}