import React, { Component } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

class Header extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div>
        <Navbar light fixed="top" expand="lg" id="mainNav">
          <Container>
            <NavbarBrand href="/">
              <img src="images/logo.png" alt="Forte Álamo"/>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar id="navbarResponsive">
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#sobre">Sobre</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#eventos">Eventos</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#orcamento">Orçamento</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contato">Contato</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1>
                  <strong>Seu dia inesquecível</strong>
                </h1>
                <hr/>
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">Torne o seu sonho realidade</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about" id="button">Solicite uma Proposta</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header
