import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { Container, Row, Col, Button } from "react-bootstrap";
import hero1 from "../images/Calendly-Individuals-Hero.webp";
import book1 from "../images/Calendly-book-eff-img.webp";
import personalass from "../images/personal-assistant.webp";

const Individuals = () => {
  return (
    <div>
      {/* Hero row */}
      <Container>
        <Row>
          <Col md={5} className="mt-5">
            <div className="introtitle pb-2">
              The genius way to work{" "}
              <span className="text-primary">better</span>
            </div>
            <div className="herostatement mb-5">
              Calendly makes it easy to work smarter when you’re working solo.
              Meetings, sessions, and appointments become more efficient ways to
              achieve success and accomplish goals.
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <Button variant="dark" className="btnsign">
                Sign up for free
              </Button>
            </div>
          </Col>
          <Col md={7} className="mt-5">
            <img id="heroimage" src={hero1} alt="hero1" />
          </Col>
        </Row>
      </Container>

      {/* Middle info */}
      <Container>
        <Row className="mt-5">
          <Col md={7} className="mt-5">
            <img id="heroimage" src={book1} alt="book1" />
          </Col>
          <Col md={5} className="mt-5">
            <div className="text-primary mt-5">A CURATED CALENDAR</div>
            <div className="introtitle pb-2 fs-1 mt-3">Book up efficiently</div>
            <div className="herostatement my-3">
              When invitees select a meeting slot from your schedule, they only
              see the times you’re available, and only the length and type of
              meeting you want to have. Your schedule fills up efficiently, and
              everyone avoids excess email exchanges.
            </div>
            <div className="mb-3">
              <a href="#" className="learnmore">
                <i className="bi bi-arrow-right"></i> Learn more
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Third row */}
      <Container>
        <Row className="my-5">
          <Col md={5} className="mt-5">
            <div className="text-primary mt-5">
              AUTOMATED NOTIFICATIONS &amp; FOLLOW-UPS
            </div>
            <div className="introtitle pb-2 fs-1 mt-3">
              Work like you have a personal assistant
            </div>
            <div className="herostatement my-3">
              Because Calendly automates administrative tasks like sending
              reminder emails and follow-ups, you can focus on the work that
              builds your business and brings customers back for more.
            </div>
            <div className="mb-3">
              <a href="#" className="learnmore">
                <i className="bi bi-arrow-right"></i> Learn more
              </a>
            </div>
          </Col>
          <Col md={7} className="mt-5">
            <img id="heroimage" src={personalass} alt="personalass" />
          </Col>
        </Row>
      </Container>

      {/* Banner row */}
      <div className="bgimage">
        <Container>
          <Row>
            <Col md={4}>
              <div className="text-white mt-4">
                <h1>Find just-right plans for individuals and small teams</h1>
              </div>
              <div className="mt-5">
                <Button variant="light" className="btnsignlight">
                  Sign up for free
                </Button>
              </div>
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
          </Row>
        </Container>
      </div>

      {/* Footer row */}
      <div className="my-5 footerrow">
        <Container>
          <Row>
            <Col md={3}>
              <div className="fs-1 fw-bold easyahead">
                Easy <br /> <span className="text-primary">ahead</span>
              </div>
              <div className="mt-4">
                We take the work out of connecting with others so you can
                accomplish more.
              </div>
              <div className="input-group my-4">
                <select className="form-select" id="inputGroupSelect01">
                  <option selected>English</option>
                  <option value="1">Français</option>
                  <option value="2">Espańol</option>
                  <option value="3">Deutsch</option>
                </select>
              </div>
            </Col>
            <Col md={3}>
              <div className="fs-3 fw-bold fmenu">About</div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">About Calendaly</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Contact Us</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Newsroom</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Careers</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Security</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="fs-3 fw-bold fmenu">Solutions</div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Customer Success</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Sales</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Recruiting</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Information Technology</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Marketting</a>
              </div>
            </Col>
            <Col md={3}>
              <div className="fs-3 fw-bold fmenu">Popular Features</div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Embed Calendly</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Availability</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Sending Notifications</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="#">Using Calendly Mobile</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Individuals;
