import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";

const sections = {
  about1: "Royal Green",
  about: "O nas",
  pricing: "Usługi",
  contact: "Kontakt",
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
