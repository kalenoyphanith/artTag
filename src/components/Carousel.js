import React, {useRef} from 'react';
import Slider from 'react-slick';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import SAU from '../media/sauBGScreen.png'
import gpc from '../media/PolisseniBGScreen.png'
/* import gordon from '../media/gordonBGScreen.png' */
import george from '../media/eastmanBGScreen.png'
import booth from '../media/boothBGScreen.png'
import boothMain from '../media/boothMainBGScreen.png'
import gannet from '../media/gannettBGScreen.png'
import navigate from '../media/navigate.png'
import {Link} from 'react-router-dom';
import BottomNav from './BottomNav';

import prevButton from '../icons/previous.png'
import nextButton from '../icons/next.png';

const PrevArrow = (props) => {
  const { className, style, onClick } = props
  return (
      <div 
          className={className}
          style={{...style, width: '50%'}}
          onClick={onClick}
      >
          <img src={prevButton}
          />
      </div>
  );
}

function NextButton(props) {
  const {className, style, onClick} = props
  return (
      <div
          className={className}
          style={{...style}}
          onClick={onClick}
      >
          <img src={nextButton} alt="arrow_left"/>
      </div>
  );
}

const Carousel = () => {
    const sliderRef = useRef();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides",
      nextArrow: <NextButton />,
      prevArrow: <PrevArrow />
    };
  
    const slidesData = [
      {
        id: 1,
        image: gpc,
        label: "Gene Polisseni Center",
      },
      {
        id: 2,
        image: SAU,
        label: "Student Alumni Union",
      },
      {
        id: 3,
        image: george,
        label: "George Eastman Building",
      },
      {
        id: 4,
        image: gannet,
        label: "Frank E. Gannett Hall",
      },
      {
        id: 5,
        image: boothMain,
        label: "Booth Hall Lobby",
      },
      {
        id: 6,
        image: booth,
        label: "James E. Booth Hall",
      },
    ];
    return (
      <>{/* id={`${slide.label}-navbar`} */}
        <div className="carousel-component">
            <h1 id="gallery-header">ArtTag</h1>
            <Slider {...settings } ref={sliderRef} className="slider-div">
              {slidesData.map((slide) =>
  
                <div className="container"key={slide.id}>
                  <img className="carousel-img" src={`${slide.image}`} alt="carousel-images"/>
                  <div className="text-block">
                    <label className="location-name" id={`${slide.label}`}>{slide.label}</label>
                    <button className="navigate-button" ><Link to="/mapbox"><img id="navButton" src={`${navigate}`} alt="navigateButton"/></Link></button>
                  </div>
                  
                </div>
  
              )}
            </Slider>
            
            {/* <p className="location-heading">Location</p> */}
            <BottomNav></BottomNav>
        </div>
      </>
    );
}
 
export default Carousel;