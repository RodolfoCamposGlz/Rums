import React, { useState, Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container} from 'reactstrap';

import logo from '../../images/logo.png';

class NavBarHome extends Component {
  NavCollapse = (props)=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  }

state={
  
}

  render() { 

    return ( <div>
    <Navbar color="trans" dark expand="md">
      <Container >
      <NavbarBrand ><img src={logo} style={{width: '75px'}}></img></NavbarBrand>
      <NavbarToggler onClick={this.toggle} />
      <Collapse style={{textAlign:"center"}} isOpen={this.isOpen} navbar>
        <Nav className="ml-auto nav-link" navbar>
          <NavItem >
            <NavLink active href="/">Inicio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">¿Como Funciona?</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Registrate</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Inicia Sesion</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      </Container>
    </Navbar>
  </div> );
  }
}

 
export default NavBarHome;


