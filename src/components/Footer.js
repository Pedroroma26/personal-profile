import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/pedro-romariz-logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <img src={logo} alt="Logo"/>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pedro-romariz-8565aba6/" target="_blank"><img src={navIcon1} /></a>
              <a href="https://www.facebook.com/pedro.romariz.3/" target="_blank"><img src={navIcon2} /></a>
              <a href="https://www.instagram.com/romarizpedro/" target="_blank"><img src={navIcon3} /></a>
            </div>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <p>CopyRight 2023. All Rights Reserved Pedro Romariz. For any quastion contact me at pedroromariz1@gmail.com.</p>
            <a href="https://www.flaticon.com/free-icons/celestial-body" title="celestial body icons" class="project_link" style={{ color: '#B8B8B8' }}>Celestial body icons created by manshagraphics - Flaticon</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
