import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import ButtonGlobal from "./ButtonGlobal";

export default function Header() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      handleCloseOffcanvas();
    }
  };

  const handleToggleOffcanvas = () => {
    setShowOffcanvas((prev) => !prev);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "education",
        "achievements",
        "projects",
        "contact",
      ];
      let current = activeSection;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (
            top <= window.innerHeight / 2 &&
            bottom >= window.innerHeight / 2
          ) {
            current = sectionId;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const getNavLinkClass = (section) =>
    activeSection === section
      ? "brand fw-bold text-uppercase"
      : "fw-bold text-white text-uppercase";

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="fixed-top border-bottom border-secondary"
      style={{ background: "#1e1e1e" }}
    >
      <Container>
        <Navbar.Brand
          onClick={() => scrollToSection("home")}
          className="m-0 p-0"
        >
          <div
            className="name position-relative m-0 bg-transparent fs-2 text-decoration-none text-uppercase"
            data-text="Awesome"
          >
            <span className="actual-name">&nbsp;KARTHIGAN&nbsp;</span>
            <span
              aria-hidden="true"
              className="front-name position-absolute top-0 start-0 overflow-hidden"
            >
              &nbsp;KARTHIGAN&nbsp;
            </span>
          </div>
        </Navbar.Brand>

        {/* Toggler Button for Mobile */}
        <Navbar.Toggle
          aria-controls="offcanvas-navbar"
          onClick={handleToggleOffcanvas}
          className="p-3 my-0 d-lg-none"
        />

        {/* Desktop Navigation */}
        <Navbar.Collapse id="navbar-nav" className="d-none d-lg-flex">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link
              onClick={() => scrollToSection("home")}
              className={getNavLinkClass("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("about")}
              className={getNavLinkClass("about")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("education")}
              className={getNavLinkClass("education")}
            >
              Education
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("achievements")}
              className={getNavLinkClass("achievements")}
            >
              Achievements
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("projects")}
              className={getNavLinkClass("projects")}
            >
              Projects
            </Nav.Link>
            <ButtonGlobal
              text="Contact Me"
              onClick={() => scrollToSection("contact")}
              className="ms-3"
            />
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Offcanvas Navigation for Mobile */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="end"
        style={{ background: "#1E1E1E" }}
      >
        <Offcanvas.Header
          closeButton
          className="custom-close-btn m-2"
        ></Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-flex flex-column align-items-center w-100">
            <Nav.Link
              onClick={() => scrollToSection("home")}
              className={`${getNavLinkClass("home")} py-5`}
              >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("about")}
              className={`${getNavLinkClass("about")} py-5`}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("education")}
              className={`${getNavLinkClass("education")} py-5`}
            >
              Education
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("achievements")}
              className={`${getNavLinkClass("achievements")} py-5`}
            >
              Achievements
            </Nav.Link>
            <Nav.Link
              onClick={() => scrollToSection("projects")}
              className={`${getNavLinkClass("projects")} py-5`}
            >
              Projects
            </Nav.Link>
            <ButtonGlobal
              text="Contact Me"
              onClick={() => scrollToSection("contact")}
            />
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}
