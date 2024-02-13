import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import LOGO from "../../assets/images/1a.jpg";

const sections = {
  about: "About",
  pricing: "Pricing",
  gallery: "Gallery",
  contact: "Contact",
};

const headerScrollFix = () => {
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  const sections = document.querySelectorAll(".section");

  sections.forEach((section) => {
    section.style.paddingTop = navbarHeight + "px";
  });
};

export const Header = () => {
  useEffect(() => {
    headerScrollFix();
  }, []);

  return (
    <Navbar sticky="top" style={{ backgroundColor: "#07240d" }}>
      <Container>
        <Navbar.Brand>
          <img
            src={LOGO}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          {Object.values(sections).map((section, index) => (
            <Nav.Link
              style={{ color: "white" }}
              href={`#${Object.keys(sections)[index]}`}
            >
              {section}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};
