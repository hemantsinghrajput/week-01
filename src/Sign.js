import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Footer from './Footer'
import Home from './Home'
import { Alert } from "react";
import {BrowserRouter as Router,Switch,Route,Link,useParams,useHistory
} from 'react-router-dom';

 function Sign() {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   
  function makeUser(){
    let data={name,email,password}
    console.warn("called",data)
  }
  function validateForm() {
    return  name.length > 0 && email.length > 0 && password.length > 0 ;
  }

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  return (
    <Router>
    
    <div className="Sign-in">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
        <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
           </Form.Group>
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
        <Button  onClick={ () =>{
          history.push("/Home");
          }}  block size="lg" type="submit" disabled={!validateForm()}>Sign In</Button>
           
           
      </Form>
    </div>
    <div>
      <Footer />
      </div> 
      <Switch>
      <Route exact path="/Home" component={Home} />
      </Switch>
      </Router>
  );
}
export default Sign;