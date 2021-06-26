import React from 'react'
import {Navbar, Nav,Container } from 'react-bootstrap'
import {LinkContainer } from 'react-router-bootstrap'
const NavBar = () => {
    return (
    <>
          <Navbar bg="dark" variant="dark" >
          <Container className="py-2">
          <Navbar.Brand href="/">collinsmazarura</Navbar.Brand>
            
              <Nav className="mr-auto">
                <LinkContainer to="/">
                <Nav.Link >About</Nav.Link>
                </LinkContainer>
               <LinkContainer to="/skills">
               <Nav.Link >Skills</Nav.Link>
               </LinkContainer>
               <LinkContainer to="/projects">
               <Nav.Link >Projects</Nav.Link>
               </LinkContainer>
              </Nav>
            </Container>
          </Navbar>
    </>
    )
}

export default NavBar
