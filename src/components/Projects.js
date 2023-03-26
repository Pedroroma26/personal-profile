import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import proj1Img1 from "../assets/img/proj1img1.png";
import proj1Img2 from "../assets/img/proj1img2.png";
import proj1Img3 from "../assets/img/proj1img3.png";
import proj1Img4 from "../assets/img/proj1img4.png";
import proj1Img5 from "../assets/img/proj1img5.png";
import proj2Img1 from "../assets/img/proj2img1.png";
import proj2Img2 from "../assets/img/proj2img2.png";
import proj2Img3 from "../assets/img/proj2img3.png";
import proj2Img4 from "../assets/img/proj2img4.png";
import proj2Img5 from "../assets/img/proj2img5.png";
import proj3Img1 from "../assets/img/proj3img1.png";




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
      title: "Pitches for Fun",
      description: "A web application that allows users to post pitches to be rented, they also can resnt others useres pitches.",
      imgUrl: proj1Img4,
    },
    {
      title: "Pitches for Fun",
      description: "A web application that allows users to post pitches to be rented, they also can resnt others useres pitches.",
      imgUrl: proj1Img5,
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
      title: "SportsAdmin",
      description: "A web application that allows competition organizers to manage compatitions, sign-up teams, and allows the referres to do a game report more efficiently",
      imgUrl: proj2Img4,
    },
    {
      title: "SportsAdmin",
      description: "A web application that allows competition organizers to manage compatitions, sign-up teams, and allows the referres to do a game report more efficiently",
      imgUrl: proj2Img5,
    },
    {
      title: "Personal Profile",
      description: "A web application that allows competition organizers to manage compatitions, sign-up teams, and allows the referres to do a game report more efficiently",
      imgUrl: proj3Img1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            <p>These are the projects that I have made.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Pitches for Fun</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">SportsAdmin</Nav.Link>
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
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {projects
                        .filter((project) => project.title === "Personal Profile")
                        .map((project, index) => {
                          return (
                            <Col key={index} md={4}>
                              <img src={project.imgUrl} alt={project.title} style={{ borderTop: '25px solid black', display: 'block', margin: '0 auto' }} />
                            </Col>
                          );
                        })}
                    </Row>
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
