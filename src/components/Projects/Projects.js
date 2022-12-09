import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/seach-image.png";
import emotion from "../../Assets/Projects/countries.png";
import editor from "../../Assets/Projects/webstudio.png";
import chatify from "../../Assets/Projects/icecream.png";
import suicide from "../../Assets/Projects/phonebook.png";
import bitsOfCode from "../../Assets/Projects/filmoteka.png";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Roma_Huminilovych_Junior_Frontend_Developer.pdf";
import Button from "react-bootstrap/Button";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ice-cream"
              description=" This is our group project to summarize HTML and CSS part of the course. Responsive and interactive landing page for an ice-cream shop. Role: Developer. Task: Products section layout with absolute positioning and adding animations."
              ghLink="https://github.com/Roman-Huminilovych/ice-cream-project"
              demoLink="https://roman-huminilovych.github.io/ice-cream-project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Filmoteka"
              description="Final project for JS part of the course. Application for choosing a movie. 8 people in the group. We used jQuery, 
                    Slick.js, Axios, Notiflix, Lodash, Handlebars and Node.js. Task: Template card, card container, control & fix bugs, control styles, important involvement in project planning. "
              ghLink="https://github.com/Roman-Huminilovych/filmoteka-team__project"
              demoLink="https://roman-huminilovych.github.io/filmoteka-team__project/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Image Search"
              description="The task was to create image search with API of the Pixabay service as a back-end.
                    Were required axios library async/await syntax, notiflix library and pagination."
              ghLink="https://github.com/Roman-Huminilovych/goit-js-hw-11"
              demoLink="https://roman-huminilovych.github.io/goit-js-hw-11/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Phonebook"
              description="Phonebook contact storage application."
              ghLink="https://github.com/Roman-Huminilovych/goit-react-hw-02-phonebook"
              demoLink="https://roman-huminilovych.github.io/goit-react-hw-02-phonebook/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Search Countries"
              description="The task was to create country search using API Rest Countries, Lodash library and Notiflix.
                    The search should show the list of the coutries or one coutry depending on the search."
              ghLink="https://github.com/Roman-Huminilovych/goit-js-hw-10"
              demoLink="https://roman-huminilovych.github.io/goit-js-hw-10/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="WebStudio"
              description="Sіmple landing page with adaptive layouts design.Individual project"
              ghLink="https://github.com/Roman-Huminilovych/goit-markup-hw-08"
              demoLink="https://roman-huminilovych.github.io/goit-markup-hw-08/"
            />
          </Col>
        </Row>
      </Container>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default Projects;
