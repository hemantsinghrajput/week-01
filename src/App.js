import logo from './logo.svg';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Card } from 'react-bootstrap';
import Mitv from './Mitv'
import Login from'./Login'
import About from './About'
import Home from './Home'
import Sign from './Sign'
import './App.css';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {
  BrowserRouter as Router,Switch,Route, Link,useParams
} from 'react-router-dom';
 function App() {
  return (
    <div>
    <Router>
    <div className="App"> 
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">JJ'S SHOP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    
      <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
      <Nav.Link href="#link"><Link to="/Mitv">TVs</Link></Nav.Link>
      <Nav.Link href="#login"><Link to="/Login" >LOG IN</Link></Nav.Link>
      <Nav.Link href="#signin"> <Link to="/Sign" >Sign In</Link></Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href=" https://www.mi.com/in/all-xiaomi-phones">MI PHONES</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">SerVice Centers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">CUSTOMER CARE</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><Link to="/About" >About</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Switch>
<Route path="/Sign">
            <Sign />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        <Route path="/Mitv">
            <Mitv />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          </Switch> 
          </div>
          </Router>
          
          </div>
  );
}
export default App;