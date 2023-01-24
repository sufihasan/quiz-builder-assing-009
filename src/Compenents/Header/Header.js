import React from 'react';
import './Header.css'

import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';

const Header = () => {
    return (
        <div>

            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand className='brand fs-3' as={Link} to='/'>Quiz Builder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link className='list-item fs-5' as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link className='list-item fs-5' as={Link} to='/topics'>Topics</Nav.Link>
                            <Nav.Link className='list-item fs-5' as={Link} to='/statistics'>Statistics</Nav.Link>
                            <Nav.Link className='list-item fs-5' as={Link} to='/blog'>Blog</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;