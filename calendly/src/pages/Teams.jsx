
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import heroImage from "../images/Teams_Hero.webp";
import groupImage from "../images/Group.webp";
import salesImage from "../images/Homepage-Hero.webp";
import recruitingImage from "../images/Calendly-Individuals-Hero.webp";
import customerSuccessImage from "../images/Teams_Hero.webp";
import educationImage from "../images/Calendly-clients.webp";

const Teams = () => {
  return (
    <div>
      <Container>
        {/* Hero row */}
        <Row>
          <Col md="6" className="mt-5">
            <div className="text-primary mt-5">CALENDLY FOR TEAMS</div>
            <div className="introtitle pb-2">Smarter scheduling for teams</div>
            <div className="herostatement mb-5">
              Whether your team’s performance is measured by sales revenue,
              recruiting pipeline, or customer retention, scheduling automation
              enables your team to hit goals faster.
            </div>
            <div className="mb-3 d-flex justify-content-center">
              <button type="button" className="btn btn-primary mx-1 btnsign">
                Start for free
              </button>
              <button
                type="button"
                className="btn btn-outline-dark mx-1 btnsign"
              >
                Contact Sales
              </button>
            </div>
          </Col>
          <Col md="6" className="mt-5 individualheroimg">
            <img id="heroimage" src={heroImage} alt="" />
          </Col>
        </Row>

        {/* Middle information */}
        <Row className="mt-5">
          <Col md="7" className="mt-5 individualheroimg">
            <img id="heroimage" src={groupImage} alt="" />
          </Col>
          <Col md="5" className="mt-5">
            <div className="text-primary mt-5">AUTOMATED ASSIGNMENT</div>
            <div className="introtitle pb-2 fs-1 mt-3">
              Control how your team gets booked
            </div>
            <div className="herostatement my-3">
              With Calendly, you can offer sessions that are a few minutes or a
              few hours for one invitee or a group. Automated round-robin, first
              available, or geography-based assignments let you easily divvy up
              meetings in any way that works for your team members.
            </div>
            <div className="mb-3">
              <a href="" className="learnmore">
                <i className="bi bi-arrow-right"></i> Learn more
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Card row */}
      <div className="my-3">
        <Container>
          <Row>
            <Col md>
              <p className="text-primary fs-4 text-center solution">
                SOLUTIONS
              </p>
              <p className="text-center fs-1 fw-semibold solutext">
                The right Calendly for the work you do
              </p>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={salesImage} />
                <Card.Body>
                  <Card.Title>Sales</Card.Title>
                  <Card.Text>Go to your best leads faster</Card.Text>
                  <a href="#">Learn more &gt;</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={recruitingImage} />
                <Card.Body>
                  <Card.Title>Recruiting</Card.Title>
                  <Card.Text>Less emailing, more closing</Card.Text>
                  <a href="#">Learn more &gt;</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={customerSuccessImage} />
                <Card.Body>
                  <Card.Title>Customer success</Card.Title>
                  <Card.Text>Connect with customers where it matters</Card.Text>
                  <a href="#">Learn more &gt;</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={educationImage} />
                <Card.Body>
                  <Card.Title>Education</Card.Title>
                  <Card.Text>Boost student success</Card.Text>
                  <a href="#">Learn more &gt;</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer row */}
      <div className="my-5 footerrow">
        <Container>
          <Row>
            <Col md="3">
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
                  <option value="2">Español</option>
                  <option value="3">Deutsch</option>
                </select>
              </div>
            </Col>
            <Col md="3">
              <div className="fs-3 fw-bold fmenu">About</div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">About Calendly</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Contact Us</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Newsroom</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Careers</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Security</a>
              </div>
            </Col>
            <Col md="3">
              <div className="fs-3 fw-bold fmenu">Solutions</div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Customer Success</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Sales</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Recruiting</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Information Technology</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Marketing</a>
              </div>
            </Col>
            <Col md="3">
              <div className="fs-3 fw-bold fmenu">Popular Features</div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Embed Calendly</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Availability</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Sending Notifications</a>
              </div>
              <div className="my-3 fs-5 footerlinks">
                <a href="">Using Calendly Mobile</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Teams
