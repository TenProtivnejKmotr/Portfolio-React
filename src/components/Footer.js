import { Container, Row, Col } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import github from '../assets/img/github-logo.svg';
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icons">
                            <a href="https://github.com/TenProtivnejKmotr"><img src={github} alt=""/></a>
                            <a href=""><img src={navIcon2} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p>Copyright 2023. All right reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}