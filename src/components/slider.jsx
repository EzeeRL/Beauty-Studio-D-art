import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./slider.css";

function SliderCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    variableWidth: false,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="slider-home">
      <div className="container-img-slider">
        <img src="/slider/img-1.jpg" alt="Slide 1" className="slider-image" />
      </div>
      <div className="container-img-slider">
        <img src="/slider/img-2.jpg" alt="Slide 2" className="slider-image" />
      </div>
      <div className="container-img-slider">
        <img src="/slider/img-3.jpg" alt="Slide 3" className="slider-image" />
      </div>
      <div className="container-img-slider">
        <img src="/slider/img-4.jpg" alt="Slide 4" className="slider-image" />
      </div>
    </Slider>
  );
}

export default SliderCarousel;
