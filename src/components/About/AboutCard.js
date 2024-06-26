import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sandip Adhikari </span>
            from <span className="purple"> Kathmandu, Nepal.</span>
            <br />
            I am currently an Engineering student.
            <br />
            I am doing my <strong className="purple">Bachelors of Electronics,Communication and Information Engineering</strong> at Kathmandu Engineering
            College, Kalimati.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SANDIP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
