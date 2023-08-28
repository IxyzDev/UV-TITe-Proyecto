import {Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
//componente comunista
export function Navbar() {
    return (
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
            <Nav.Link to="/Create_Publications" as={NavLink}>
              Crear Publicaciones
            </Nav.Link>
            <Nav.Link to="/Show_Publications" as={NavLink}>
              Mostrar Publicaciones
            </Nav.Link>
          </Nav>
        </Container>
      </NavbarBs>
    )
  }