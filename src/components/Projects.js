import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import Calculator from "../assets/img/Calculator.png";
import CalculatorCode from "../assets/img/Calculator_Code.png";
import LogIn from "../assets/img/Log-In.png";
import LogInCode from "../assets/img/Log-In_Code.png";
import Wheelcarousel from "../assets/img/WheelCarousel.png";
import WheelcarouselCode from "../assets/img/WheelCarousel_Code.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const finalForm = [
        {
            title: "Calculator",
            description: "HTML & SCSS",
            imgUrl: Calculator,
        },
        {
            title: "Carousel of Rims",
            description: "Vue.js & Bootstrap carousel",
            imgUrl: Wheelcarousel,
        },
        {
            title: "Log-In form",
            description: "Pure HTML & CSS",
            imgUrl: LogIn,
        }
    ];

    const codes = [
        {
            title: "Calculator",
            description: "An HTML calculator is a digital tool that allows users to perform arithmetic calculations on a webpage using HTML and CSS. Typically, an HTML calculator is designed with a simple user interface that includes a display screen, numeric buttons, and arithmetic operation buttons.",
            imgUrl: CalculatorCode,
        },
        {
            title: "Carousel of Rims",
            description: "Vue Bootstrap Carousel is a carousel component for Vue.js applications that is built on top of the popular Bootstrap framework. It provides a simple and easy-to-use interface for creating responsive and customizable carousels or sliders using the power of Vue.js and Bootstrap.",
            imgUrl: WheelcarouselCode,
        },
        {
            title: "Log-In",
            description: "A simple login form is a common component of many web applications that require user authentication. It typically consists of two input fields: one for the user's username or email address and another for the user's password.",
            imgUrl: LogInCode,
        }
    ];


    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => 
                                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
                                    <h2>Projects</h2>
                                    <p>Project that I have build, some better than others.</p>
                                </div>}
                        </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Front point of view</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Code</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Links and Info</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        finalForm.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        codes.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    <p>The easiest way how to find these project is by clicking on one of the following links here:</p>
                                        <a className="btn btn_dark" href="https://github.com/TenProtivnejKmotr/Calculator">Calculator Repository</a>
                                        <a className="btn btn_dark" href="https://github.com/TenProtivnejKmotr/Carousel">Carousel Repository</a>
                                        <a className="btn btn_dark" href="https://github.com/TenProtivnejKmotr/Login-Form">LoginForm Repository</a>
                                    <p>Another way is simply by clicking on Git logo on Navigation bar or at footer on this page, which is at bottom.</p>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}