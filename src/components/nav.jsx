import React from "react";
import {
  Navbar,
  NavItem,
  Nav,
} from "reactstrap";

import {Link} from 'react-router-dom'


function MyNav() {
  return (
    <Navbar>
      <Link to = "/">hola react</Link>
      <Nav>
        <NavItem>
          <Link to = "/Civilizaciones">CIVILIZACIONES</Link>
        </NavItem>
        <NavItem>
          <Link to = "/Contacto">CONTACTO</Link>
        </NavItem>
        <NavItem>
          <Link to = "/Acerca De Nosotros">ACERCA DE NOSOTROS</Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default MyNav;
