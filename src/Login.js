import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Navbar, Nav } from 'react-bootstrap';
import Footer from './Footer'
import Home from './Home'
import Sign from './Sign'
import { Alert } from "react";
import {BrowserRouter as Router,Switch,Route,Link,useParams,useHistory
} from 'react-router-dom';

export default function Login() {
  let history1 = useHistory();
  let history2 = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
  function makeUser(){
    let data={email,password}
    console.warn("called",data)
  }
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    
  }
  const routeChange = () =>{ 
    let path = "/Sign"; 
    history1.push(path);
  }

  return (
    <Router>
      <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control

            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button  onClick={ (makeUser) =>{
          history2.push("/Home");
          }}  block size="lg" type="submit" disabled={!validateForm()}>Login</Button>
           
           
      </Form>
    </div>
    <div>
      <Footer />
      </div> 
      <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Sign" component={Sign} />

      </Switch>
      </Router>
  );
}