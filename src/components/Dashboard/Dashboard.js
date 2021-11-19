import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Nav, Navbar, Row, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Reviews from '../Reviews/Reviews';
import Myorder from './Myorder/Myorder';
import Pay from './Pay/Pay';

const Dashboard = () => {
    const { user, logOut } = useAuth();
    return (
        <div>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">My Order</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Reviews</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Payment</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="four"><Navbar >
                                    <Container>


                                        <Navbar.Toggle />
                                        <Navbar.Collapse className="justify-content-center">

                                            {user?.email ?
                                                <Button onClick={logOut} variant="light">Log Out</Button> :
                                                <Nav.Link as={Link} to="/login">Log In</Nav.Link>}

                                        </Navbar.Collapse>

                                    </Container>
                                </Navbar></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Myorder></Myorder>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Reviews></Reviews>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Pay></Pay>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default Dashboard;