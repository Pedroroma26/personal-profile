import { Container, Col, Row } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ruby_logo from '../assets/img/ruby_logo.png';
import rails_logo from '../assets/img/rails_logo.png';
import react_logo from '../assets/img/react_logo.png';
import sql_logo from '../assets/img/sql_logo.png';
import html_logo from '../assets/img/html_logo.png';
import css_logo from '../assets/img/css_logo.png';
import javascript_logo from '../assets/img/javascript_logo.png';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <TrackVisibility>
              {({ isVisible}) =>
                <div key={isVisible} className={isVisible ? "animate__animated animate__lightSpeedInLeft animate__repeat-1 animate__slow" : ""}>
                  <h2>Skills</h2>
                  <p>As a recent graduate of Le Wagon's Web Development Coding Bootcamp, I have gained comprehensive knowledge and hands-on experience in various programming languages and web development tools.
                    In order to continue learning other skills, I created this portfolio page in React.</p>
                </div>}
              </TrackVisibility>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={ruby_logo} alt="Image" />
                  <h5>Ruby</h5>
                </div>
                <div className="item">
                  <img src={rails_logo} alt="Image" />
                  <h5>Rails</h5>
                </div>
                <div className="item">
                  <img src={html_logo} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css_logo} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript_logo} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={sql_logo} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={react_logo} alt="Image" />
                  <h5>React</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
