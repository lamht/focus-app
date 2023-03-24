import React, { useState, useRef } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Routes ,Route } from 'react-router-dom';
import Home from './page/home';
import Feature from './page/feature';
import Pricing from './page/pricing';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/feature">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' Component={Home}></Route>
      <Route path='/feature' Component={Feature}></Route>
      <Route path='/pricing' Component={Pricing}></Route>
    </Routes>
    </div>
  );
}

export default App;
