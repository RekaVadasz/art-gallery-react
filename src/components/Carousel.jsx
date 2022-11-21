import React from 'react';

import "./Carousel.css";

import image from '../assets/astronaut-helmet.png';
import image_2 from '../assets/asteroid.png';
import image_3 from '../assets/ezgif.com-gif-maker_1.png';
import image_4 from '../assets/ezgif.com-gif-maker_2.png';

function Carousel() {
    return (
        <section id="carousel">

            <div className="social">
                <i className="carousel-socials fa-brands fa-facebook-f"></i>
                <i className="carousel-socials fa-brands fa-instagram"></i>
                <i className="carousel-socials fa-brands fa-twitter"></i>
            </div>

            <div className="carousel" aria-label="Gallery">
                <ol className="carousel__viewport">

                    <li id="carousel__slide1"
                        tabIndex="0"
                        className="carousel__slide">
                            <div className='carousel-image-container'>
                                <img src={image} alt="helmet" />
                            </div>
                        <h2 className="slider-title">Connecting earth and sky</h2>
                        <h3 className="slider-subtitle">Astronauts create a connection between Earth and the endless Sky. Similarly, a piece of art is a tool to connect a tiny part of our souls to the infinity.</h3>
                    <div className="carousel__snapper">
                        <a href="#carousel__slide4"
                            className="carousel__prev">Go to last slide</a>
                        <a href="#carousel__slide2"
                            className="carousel__next">Go to next slide</a>
                    </div>
                    </li>

                    <li id="carousel__slide2"
                        tabIndex="0"
                        className="carousel__slide">
                            <div className='carousel-image-container'>
                                <img src={image_2} alt="asteroid" />
                            </div>
                        <h2 className="slider-title">Connecting earth and sky</h2>
                        <h3 className="slider-subtitle">Astronauts create a connection between Earth and the endless Sky. Similarly, a piece of art is a tool to connect a tiny part of our souls to the infinity.</h3>
                    <div className="carousel__snapper"></div>
                    <a href="#carousel__slide1"
                        className="carousel__prev">Go to previous slide</a>
                    <a href="#carousel__slide3"
                        className="carousel__next">Go to next slide</a>
                    </li>

                    <li id="carousel__slide3"
                        tabIndex="0"
                        className="carousel__slide">
                            <div className='carousel-image-container'>
                                <img src={image_3} alt="astronaut" />
                            </div>
                        <h2 className="slider-title">Connecting earth and sky</h2>
                        <h3 className="slider-subtitle">Astronauts create a connection between Earth and the endless Sky. Similarly, a piece of art is a tool to connect a tiny part of our souls to the infinity.</h3>
                    <div className="carousel__snapper"></div>
                    <a href="#carousel__slide2"
                        className="carousel__prev">Go to previous slide</a>
                    <a href="#carousel__slide4"
                        className="carousel__next">Go to next slide</a>
                    </li>

                    <li id="carousel__slide4"
                        tabIndex="0"
                        className="carousel__slide">
                            <div className='carousel-image-container'>
                                <img src={image_4} alt="helmet" />
                            </div>
                        <h2 className="slider-title">Connecting earth and sky</h2>
                        <h3 className="slider-subtitle">Astronauts create a connection between Earth and the endless Sky. Similarly, a piece of art is a tool to connect a tiny part of our souls to the infinity.</h3>
                    <div className="carousel__snapper"></div>
                    <a href="#carousel__slide3"
                        className="carousel__prev">Go to previous slide</a>
                    <a href="#carousel__slide1"
                        className="carousel__next">Go to first slide</a>
                    </li> 
 
                </ol>
            </div>
            <div className="carousel__navigation">
                <ol className="carousel__navigation-list">

                    <li className="carousel__navigation-item">
                    <a href="#carousel__slide1"
                        className="carousel__navigation-button">Go to slide 1</a>
                    </li>

                    <li className="carousel__navigation-item">
                    <a href="#carousel__slide2"
                        className="carousel__navigation-button">Go to slide 2</a>
                    </li>

                    <li className="carousel__navigation-item">
                    <a href="#carousel__slide3"
                        className="carousel__navigation-button">Go to slide 3</a>
                    </li>

                    <li className="carousel__navigation-item">
                    <a href="#carousel__slide4"
                        className="carousel__navigation-button">Go to slide 4</a>
                    </li>

                </ol>
            </div>
        </section>
    )
}

export default Carousel;