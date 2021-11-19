import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand to="/home">DREAM CAMERA SHOP</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>

                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/reviews">Reviews</Nav.Link>
                        {user?.email ?
                            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> :
                            <></>}
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Log Out</Button> :
                            <Nav.Link as={Link} to="/login">Log In</Nav.Link>}

                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </>
    );
};

export default Header;