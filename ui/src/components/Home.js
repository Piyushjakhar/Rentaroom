import React, { Component } from 'react'
import { Navbar, Form, FormControl, Button, Nav, Container, NavDropdown, Col, Row, InputGroup} from 'react-bootstrap'


export default class Home extends Component {
    render() {
        return (
            <>
            <Container>
                <Navbar expand="lg">
                <Navbar.Brand href="#home"><strong>Rentaroom.com</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Post your Property</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/login">
                        Login <i className="fas fa-sign-in-alt"></i>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                
                <h1 className="mainQuote">Distance has no meaning, The heart always finds it's way home!!</h1>
                <Row className="justify-content-center my-5">
                <InputGroup className="w-50">
                    <FormControl
                    placeholder="What are you looking for?"
                    aria-label="What are you looking for?"
                    className="searchBar"
                    
                    />
                    <InputGroup.Append>
                    <Button>Search</Button>
                    </InputGroup.Append>
                </InputGroup>
                </Row>
            </Container>

            <img src="img1.jpg" style={{height: "100%", width: "100%", marginTop: "30px"}}></img>


                <div class="pt-5 pb-5 footer">
                <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-xs-12 about-company">
                    <h2>Rentaroom</h2>
                    <p class="pr-5 text-white-50">Life is a one time offer, use it well!</p>
                    <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                    </div>
                    <div class="col-lg-3 col-xs-12 links">
                    <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                        <ul class="m-0 p-0">
                        <li>- <a href="#">Rooms</a></li>
                        <li>- <a href="#">Flats</a></li>
                        <li>- <a href="#">Post Advertisment</a></li>
                        <li>- <a href="#">Pricing</a></li>
                        <li>- <a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-xs-12 location">
                    <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                    <p>Sector 48, Phase II Gurgaon</p>
                    <p class="mb-0"><i class="fa fa-phone mr-3"></i>(123) 456-7890</p>
                    <p><i class="fa fa-envelope-o mr-3"></i>info@rentaroom.com</p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col copyright">
                    <p class=""><small class="text-white-50">© 2021. All Rights Reserved.</small></p>
                    </div>
                </div>
                </div>
                </div>

           </>

        )
    }
}
