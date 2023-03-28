import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"
import proj1Img1 from "../assets/img/proj1img1.png";
import proj1Img2 from "../assets/img/proj1img2.png";
import proj1Img3 from "../assets/img/proj1img3.png";
import proj2Img1 from "../assets/img/proj2img1.png";
import proj2Img2 from "../assets/img/proj2img2.png";
import proj2Img3 from "../assets/img/proj2img3.png";
import proj3Img1 from "../assets/img/proj3img1.png";
import proj3Img2 from "../assets/img/proj3img2.png";
import proj3Img3 from "../assets/img/proj3img3.png";
import 'animate.css';
import TrackVisibility from "react-on-screen";


export const Projects = () => {

  const projects = [
    {
      title: "Pitches for Fun",
      description: "A web application that allows users to post pitches to be rented, they also can resnt others useres pitches.",
      imgUrl: proj1Img1,
    },
    {
      title: "Pitches for Fun",
      description: "A web application that allows users to post pitches to be rented, they also can resnt others useres pitches.",
      imgUrl: proj1Img2,
    },
    {
      title: "Pitches for Fun",
      description: "A web application that allows users to post pitches to be rented, they also can resnt others useres pitches.",
      imgUrl: proj1Img3,
    },
    {
      title: "SportsAdmin",
      description: "A web application that allows competition organizers to manage compatitions, sign-up teams, and allows the referres to do a game report more efficiently",
      imgUrl: proj2Img1,
    },
    {
      title: "SportsAdmin",
      description: "A web application that allows competition organizers to manage compatitions, sign-up teams, and allows the referres to do a game report more efficiently",
      imgUrl: proj2Img2,
    },
    {
      title: "SportsAdmin",
      description: "A web application that allows competition organizers to manage compatitions, sign-up teams, and allows the referres to do a game report more efficiently",
      imgUrl: proj2Img3,
    },
    {
      title: "Personal Profile",
      description: "This project is to show my personal porfolio of developed apps.",
      imgUrl: proj3Img1,
    },
    {
      title: "Personal Profile",
      description: "This project is to show my personal porfolio of developed apps.",
      imgUrl: proj3Img2,
    },
    {
      title: "Personal Profile",
      description: "This project is to show my personal porfolio of developed apps.",
      imgUrl: proj3Img3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
            {({ isVisible}) =>
            <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
            <h2>Projects</h2>
            <p>These are the projects that I developed.</p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Pitches for Fun</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sports Admin</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Personal Profile</Nav.Link>
                </Nav.Item>
              </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects
                        .filter((project) => project.title === "Pitches for Fun")
                        .map((project, index) => {
                          return (
                          <Col key={index} md={4}>
                            <img src={project.imgUrl} alt={project.title} style={{ borderTop: '25px solid black' }} />
                          </Col>
                        );
                      })}
                    </Row>
                    <div class="description">
                      <p>Pitches for Fun is a web application that allows users to post the pitches that they own to be rent. They also can rent others users pitches and rate them.
                         You can visit this project <a href="https://pitches-for-fun-pedroroma26.herokuapp.com/" target="_blank" class="project_link">here</a>.</p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects
                        .filter((project) => project.title === "SportsAdmin")
                        .map((project, index) => {
                          return (
                            <Col key={index} md={4}>
                              <img src={project.imgUrl} alt={project.title} style={{ borderTop: '25px solid black' }} />
                            </Col>
                          );
                        })}
                    </Row>
                    <div class="description">
                      <p>SportsAdmin is a web application that allows competition organizers to manage their competitions. It enables organizers to sign up teams and their squads, schedule games between different teams, and perform match reports with the details of the game. After the game ends, an email is sent to both teams for validation.
                         You can visit this project <a href="https://sports-reports.herokuapp.com/" target="_blank" class="project_link">here</a>.</p>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects
                        .filter((project) => project.title === "Personal Profile")
                        .map((project, index) => {
                          return (
                            <Col key={index} md={4}>
                              <img src={project.imgUrl} alt={project.title} style={{ borderTop: '25px solid black' }} />
                            </Col>
                          );
                        })}
                    </Row>
                    <div class="description">
                      <p>This project is to show my personal porfolio of developed apps.
                         You can visit this project <a href="https://pedroroma26.github.io/personal-profile/" target="_blank" class="project_link">here</a>.</p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
