import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/ProjImg1.png";
import projImg2 from "../assets/img/ProjImg2.png";
import projImg3 from "../assets/img/ProjImg3.png";
import projImg4 from "../assets/img/ProjImg4.png";
import { ProjectCard } from "./ProjectCard";


export const  Projects = () => {

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg4,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    
    return (
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
                <h2>Projects</h2>
                <p></p>
              <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                            />
                        )
                      })
                    }
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    )
}