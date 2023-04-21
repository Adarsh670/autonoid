import React, { useRef } from "react";
import "./home.css";
import scooter from "../../images/bike-icon.png";
import bike1 from "../../images/bike1.png";
import quality from "../../images/quality-icon.png";
import trusted from "../../images/trusted-brand.png";
import seek from "../../images/seek-icon.png";
import battery from "../../images/battery.png";
import suspention from "../../images/suspention.png";
import waterproof from "../../images/waterproof.png";
import parth from "../../images/prith.png";
import brake from "../../images/brake.png";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { FaCircleNotch } from "react-icons/fa";

import Slider from "react-slick";

const Home = () => {
  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          arrows: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="container-fluid home-main-banner">
        <div className="row">
          <div className="col-lg-5 home-main-banner-left">
            <div className="banner-text">
              <h1>PRITH-EV </h1>
              <h2>M300</h2>
            </div>
          </div>
          <div className="col-lg-7 home-main-banner-right">
            <img src={parth} className="img-fluid" alt="parth" />
            <div className="hightlight1">
              <FaCircleNotch color="#ACEB1E" />
              <div className="hightlight-text">
                <p>HEADLIGHT</p>
                <span>High-quality product</span>
              </div>
            </div>
            <div className="hightlight2">
              <FaCircleNotch color="#ACEB1E" />
              <div className="hightlight-text">
                <p>COMBI BRAKE SYSTEM</p>
                <span>Hydraulic Disc Brake</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     

      <div className="path-para1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <img
                className="para1-scooter"
                src={scooter}
                alt=""
                data-aos="fade-right"
                data-aos-duration="1000"
              />
            </div>
            <div className="col-lg-6">
              <h1
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="2000"
              >
                FOR THE
                <br />
                UNBREAKABLE{" "}
              </h1>
              <p className="path-para1-p">
                Designed for the dreamers and built for the unbreakable, MIHOS
                is developed with the latest and more efficient technology.
                Built with Poly DiCycloPentadiene (PDCPD) or industrial rock,
                this beauty with strength combines comfort, technology and
                top-notch mechanics.
              </p>
            </div>
            <div className="col-12 bike p-0">
              <img
                src={bike1}
                alt="bike"
                className="img-fluid"
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container home-card">
        <div className="row">
          <div className="col-lg-4 p-0">
            <div>
              <div className="card">
                <div className="card-body home-card-line">
                  <img src={trusted} className="card-img-top" alt="..." />
                  <h5 className="card-title">Most Trusted Brand</h5>
                  <p className="card-text">
                    We are one of the fastest growing EV Companies and that is
                    why we are trusted by millions of people.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card">
              <div className="card-body home-card-line">
                <img src={quality} className="card-img-top" alt="..." />
                <h5 className="card-title">High-Quality Product</h5>
                <p className="card-text">
                  Having a legacy of more than 40 years in the industry, we
                  offer premium quality products.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 p-0">
            <div className="card">
              <div className="card-body">
                <img src={seek} className="card-img-top" alt="..." />
                <h5 className="card-title">Seek Growth</h5>
                <p className="card-text">
                  Become our channel partner, grow your network, and expect a
                  good return on investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="container home-slider">
        <div className="section-heading">
          <h1 data-aos="fade-up" data-aos-duration="2000">
            FEATURES
          </h1>
        </div>
        <Slider ref={slider} {...settings}>
          <div className="slider-div">
            <div className="slider-text">
              <h1>Battery</h1>
              <p>
                With an imporved battery of 74 V, 40 Ah that gets fully charged
                within 4 to 5 hours, you will be able to trabel an approximate
                of 130 km in a single charge, enjoying its ease of riding.
              </p>
            </div>
            <img src={battery} alt="battery" />
          </div>
          <div className="slider-div">
            <div className="slider-text">
              <h1>Waterproof ip6</h1>
              <p>
                The ARAI standard battery pack comes with anti-dust,
                water-proof, vibration-withstanding abilities and can resist
                water jets of extermely high perssure.
              </p>
            </div>
            <img src={waterproof} alt="battery" />
          </div>
          <div className="slider-div">
            <div className="slider-text">
              <h1>Combi Brake System (Hydraulic disc brake)</h1>
              <p>
                MIHOS is equipped with a combi brake disc system that guarantees
                a smooth ride as well as the correct handling of the vehicle
                when reducing speed or avoiding collisions. In short - a
                combined braking system for a safer speed control.
              </p>
            </div>
            <img src={brake} alt="battery" />
          </div>
          <div className="slider-div">
            <div className="slider-text">
              <h1>Suspension</h1>
              <p>Adaptive suspension for the Indian roads.</p>
            </div>
            <img src={suspention} alt="battery" />
          </div>
        </Slider>
        <div className="custom-slider-btns">
          <button onClick={() => slider.current.slickPrev()}>
            <BsChevronLeft />
          </button>
          <button onClick={() => slider.current.slickNext()}>
            <BsChevronRight />
          </button>
        </div>
      </div>
    
    </>
  );
};

export default Home;
