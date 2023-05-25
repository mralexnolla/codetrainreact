import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import dropbox from '../images/Dropbox_logo.svg'
import compass from '../images/Compass.svg'
import twillo from '../images/Twilio-logo-red.svg'
import ebay from '../images/EBay_logo.svg'
import zenfits from '../images/zenefits.svg'
import homepageher from '../images/Homepage-Hero.webp'
import calIndHero from '../images/Calendly-Individuals-Hero.webp'
import teamsHerro from '../images/Teams_Hero.webp'

const Enterprises = () => {
  return (
    <div>
      {/* Hero row */}
      <div className="row">
        <div className="col-md-6 mt-5"></div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 text-center mt-5 fs-1 fw-bold">
          <span className="text-primary">Way more</span> than scheduling links
          <div className="fw-normal fs-5 mt-5">
            <p>
              Standardize on the #1 scheduling platform and deliver the power of
              Calendly across your entire organization
            </p>
          </div>
          <div className="">
            <button type="button" className="btn btn-primary mx-1 btnsign">
              Contact Sales
            </button>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>

      <div className="trustees">
        <Container>
          <Row className="col-md mrqee">
            <div className="text-center fs-3 mt-4">
              Trusted by more than 50,000 of the world's leading organizations
            </div>
            <marquee behavior="scroll" direction="left">
              <div className="d-flex aliglogos">
                <div className="imgscroll">
                  {" "}
                  <img src={dropbox} alt="dopbox" />{" "}
                </div>
                <div className="imgscroll">
                  {" "}
                  <img src={compass} alt="compass" />{" "}
                </div>
                <div className="imgscroll">
                  {" "}
                  <img src={twillo} alt="twillo" />{" "}
                </div>
                <div className="imgscroll">
                  {" "}
                  <img src={zenfits} alt="zenfits" />{" "}
                </div>
              </div>
            </marquee>
          </Row>
        </Container>
      </div>

      {/* Card row */}
      <div className="my-3">
        <Container>
          <Row>
            <div className="d-flex mt-4">
              <Col md="4">
                <Card style={{ width: "18rem" }}>
                  <Card.Title className="text-primary mx-3 my-3">
                    Sales
                  </Card.Title>
                  <Card.Img variant="top" src={homepageher} />
                  <Card.Body>
                    <Card.Text>
                      Go to your best leads faster Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Repellendus, eligendi?
                    </Card.Text>
                    <a href="#">Learn more &gt;</a>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ width: "18rem" }}>
                  <Card.Title className="text-primary mx-3 my-3">
                    Recruiting
                  </Card.Title>
                  <Card.Img variant="top" src={calIndHero} />
                  <Card.Body>
                    <Card.Text>
                      Less emailing, more closing Lorem ipsum dolor sit amet
                      consectetur de adipisicing elit. Veritatis, deleniti.
                    </Card.Text>
                    <a href="#">Learn more &gt;</a>
                  </Card.Body>
                </Card>
              </Col>
              <Col md="4">
                <Card style={{ width: "18rem" }}>
                  <Card.Title className="text-primary mx-3 my-3">
                    Customer success
                  </Card.Title>
                  <Card.Img variant="top" src={teamsHerro} />
                  <Card.Body>
                    <Card.Text>
                      Connect with customers where it matters Lorem, ipsum dolor
                      sit amet consectetur adipisicing. qwfwf
                    </Card.Text>
                    <a href="#">Learn more &gt;</a>
                  </Card.Body>
                </Card>
              </Col>
            </div>
          </Row>
          <Row>
            <Col md className="d-flex justify-content-center mt-5">
              <button type="button" className="btn btn-primary mx-1 btnsign">
                Contact Sales
              </button>
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
};

export default Enterprises;
