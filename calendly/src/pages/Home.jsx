import React from 'react'
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';
import homepghero from '../images/Homepage-Hero.webp'
import dropbox from "../images/Dropbox_logo.svg";
import compass from "../images/Compass.svg";
import twillo from "../images/Twilio-logo-red.svg";
import ebay from "../images/EBay_logo.svg";
import zenfits from "../images/zenefits.svg";

const Home = () => {
  return (
    <div>
      {/* Hero row */}
      <Row>
        <Col md={4} className="mt-5">
          <div className="introtitle pb-2">
            Easy scheduling <span className="text-primary">ahead</span>
          </div>
          <div className="herostatement mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            magnam provident error quaerat dolores commodi ipsam quisquam?
            Nostrum ut quo voluptatem!
          </div>

          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter your Email"
              className="emailinput"
            />
            <Button variant="dark" className="text-white radiusbtn">
              Sign Up
            </Button>
          </InputGroup>
          <div className="text-secondary">
            Credit your free account. No credit card required
          </div>
        </Col>
        <Col md={8} className="mt-5">
          <img id="heroimage" src={homepghero} alt="homepghero" />
        </Col>
      </Row>

      {/* Data row */}
      <Row className="mb-5">
        <Col md>
          <Row className="mb-5">
            <Col md={3}></Col>
            <Col md={6} className="text-center fw-semibold nousers">
              Simplified scheduling for more than{" "}
              <span className="text-primary">10,000,000</span> users worldwide
            </Col>
            <Col md={3}></Col>
          </Row>
          <Row>
            <Col md={2}>
              <img className="advlogo" src={ebay} alt="ebay" />
            </Col>
            <Col md={2}>
              <img className="advlogo" src={zenfits} alt="zenfits" />
            </Col>
            <Col md={2}>
              <img className="advlogo" src={compass} alt="compass" />
            </Col>
            <Col md={2}>
              <img className="advlogo" src="" alt="" />
            </Col>
            <Col md={2}>
              <img className="advlogo" src={twillo} alt="twillo" />
            </Col>
            <Col md={2}>
              <img className="advlogo" src={dropbox} alt="dropbox" />
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Footer row */}
      <Row>
        <Col md={2}></Col>

        <Col md={2} className="d-flex">
          <div className="text-center mx-2">
            <div className="bg-primary cirfoote text-white pt-1 rounded-circle">
              1
            </div>
            <div className="bg-light vertical"></div>
          </div>
          <div className="col-md-12">
            <div className="fs-4 fw-semibold mb-4 vertext">
              Create a simple rule
            </div>

            <p id="fstnormal">
              Let Colendly know your availability preferences and it'll do the
              work for you.
            </p>
          </div>
        </Col>

        <Col md={2} className="d-flex">
          <div className="text-center mx-2">
            <div className="bg-primary cirfoote text-white pt-1 rounded-circle">
              2
            </div>
            <div className="bg-light vertical"></div>
          </div>
          <div className="col-md-12 px-3">
            <div className="fs-4 fw-semibold mb-4 vertext">Share your Link</div>

            <p id="fstnormal">
              Send guests your Calendly link or embed it on your website.
            </p>
          </div>
        </Col>

        <Col md={2} className="d-flex">
          <div className="text-center mx-2">
            <div className="bg-primary cirfoote text-white pt-1 rounded-circle">
              3
            </div>
            <div className="bg-light vertical"></div>
          </div>
          <div className="col-md-12 px-3">
            <div className="fs-4 fw-semibold mb-4 vertext">Get booked</div>

            <p id="fstnormal">
              The pick a time and the event added to your calendar.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home
