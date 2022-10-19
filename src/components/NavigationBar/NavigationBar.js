import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import './NavigationBar.css'
import { AuthContext } from '../UserContext/UserContext';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand ><Link to='/'>All Countries</Link></Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/'>Home</Link>
                            <Link to="countries">Countries</Link>
                            {
                                user?.uid ? <Link onClick={logOut}>Log Out</Link> : <>
                                    <Link to="login">Login</Link>
                                    <Link to="register">Register</Link>
                                </>
                            }



                            <div>
                                {user?.uid && user.email}
                                {user?.displayName && user.displayName}
                            </div>
                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;