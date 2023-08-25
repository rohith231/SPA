import React, { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import { mobileDevelopment } from "./Services/mobileDevelopment";
import "./navbar.styles.css";
import { ourServices } from "./Services/ourServices";
import { technologies } from "./Services/technologies";
import { Tooltip } from "@mui/material";

const NavbarComp = () => {
  const [colorChange, setColorchange] = useState(false);
  const [navTapped, setNavTapped] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else if (navTapped === false) {
      setColorchange(false);
    } else if (navTapped === true) {
      setColorchange(true);
    }
  };
  const toggleNav = () => {
    setNavTapped(!navTapped);
    if (colorChange) {
      setColorchange(colorChange);
    } else {
      setColorchange(!colorChange);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className={colorChange ? "navbar colorChange" : "navbar"}
      onClick={toggleNav}
    >
      <Container>
        <Navbar.Brand href="/" className="nv-brand">
          <img src={Logo} className="logo-img" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-height">
          <Nav>
            {/* Home */}
            <Nav.Link href="/">Home</Nav.Link>
            {/* Services */}
            <div className="dropdown-menu-serivices">
              <NavDropdown
                title="Services"
                id="collasible-nav-dropdown-services"
                renderMenuOnMount={true}
              >
                <div className="nav-row">
                  <div className="nav-col">
                    <NavDropdown.Item href="/services">
                      <h5>Our Services</h5>
                    </NavDropdown.Item>
                    {ourServices.map((e) => (
                      <div key={e.title}>
                        <NavDropdown.Item href={e.href}>
                          <p>{e.title}</p>
                        </NavDropdown.Item>
                      </div>
                    ))}
                  </div>
                  <div className="divider">
                    <NavDropdown.Divider />
                  </div>
                  <div className="nav-col col-pad">
                    <NavDropdown.Item href="/#action/3.2">
                      <h5>Technologies</h5>
                    </NavDropdown.Item>
                    {technologies.map((e) => (
                      <div key={e.title}>
                        <NavDropdown.Item href={e.href}>
                          <p>{e.title}</p>
                        </NavDropdown.Item>
                      </div>
                    ))}
                  </div>
                  <div className="divider">
                    <NavDropdown.Divider />
                  </div>
                  <div className="nav-col">
                    <NavDropdown.Item href="/#action/3.3">
                      <h5>Mobile Development</h5>
                    </NavDropdown.Item>
                    {mobileDevelopment.map((e) => (
                      <div key={e.title}>
                        <NavDropdown.Item href={e.href}>
                          <p>{e.title}</p>
                        </NavDropdown.Item>
                      </div>
                    ))}
                  </div>
                </div>
              </NavDropdown>
            </div>
            {/* Products */}
            <NavDropdown
              title="Products"
              id="collasible-nav-dropdown-products"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="/products/matchsquare">
                <p>MatchSquare</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/arizona-lottery">
                <p>Arizona lottery</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/telemed2u">
                <p>Telemed2U</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/kayo-auto">
                <p>Kayo Auto</p>
              </NavDropdown.Item>
            </NavDropdown>
            {/* About */}
            <NavDropdown
              title="About Us"
              id="collasible-nav-dropdown-about"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="/about-us">
                <p>About Isteller</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/our-clients">
                <p>Our Clients</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/testimonials">
                <p>Testimonials</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/portfolio">
                <p>Portfolio</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="/careers">
                <p>Careers</p>
              </NavDropdown.Item>
            </NavDropdown>
            {/* Contact */}
            <Tooltip title="test@istellar.com" arrow>
              <Nav.Link href="/contact">
                <div className="contact-us-button">Contact Us</div>
              </Nav.Link>
            </Tooltip>
          </Nav>
        </Navbar.Collapse>
        <div className="partners">
          <div className="adobe-partner" />
        </div>
      </Container>
    </Navbar>
  );
};
export default NavbarComp;
