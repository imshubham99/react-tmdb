import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./Cast.module.css";

import Avatar from "../../images/avatar.svg";

const Cast = ({ casts, castLoading }) => {
  const [myslidesToShow, setSlidesToShow] = useState(null);
  const sliderElement = useRef();

  useEffect(() => {
    changeTotalShow();
    window.addEventListener("resize", changeTotalShow);
    return () => window.removeEventListener("resize", changeTotalShow);
  }, []);

  const changeTotalShow = () => {
    let totalItems = Math.round(sliderElement.current.offsetWidth / 70);
    if (totalItems > casts.length) {
      totalItems = casts.length;
    }
    setSlidesToShow(totalItems);
  };
  //   if (castLoading) {
  //     return <Spinner />;
  //   }
  //   const item = casts.map(cast => {
  //     return <CastItem cast={cast} />;
  //   });
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: myslidesToShow,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className={classes.cast} ref={sliderElement}>
      <h4>Cast</h4>
      <Slider {...settings} className={classes.slider}>
        {casts.map(cast => {
          return (
            <div key={cast.id}>
              {cast.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185/${cast.profile_path}`}
                />
              ) : (
                <img src={Avatar} alt="Avatar" />
              )}
              {/* <span className={classes.tooltiptext}>{cast.character}</span> */}
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

function NextArrow({ onClick }) {
  return (
    <div
      style={{
        right: "-15px",
        position: "absolute",
        top: "45%",
        display: "block",
        width: "12px",
        height: "12px",
        color: "#00d474",
        padding: "0",
        transform: "translate(0, -50%)",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      style={{
        left: "-15px",
        position: "absolute",
        top: "45%",
        display: "block",
        width: "12px",
        height: "12px",
        color: "#00d474",
        padding: "0",
        transform: "translate(0, -50%)",
        cursor: "pointer"
      }}
      onClick={onClick}
    >
      <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
    </div>
  );
}

export default Cast;
