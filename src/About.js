import React from 'react'
import Button from 'react-bootstrap/Button';
import Footer from './Footer'
import {
    BrowserRouter as Router,Switch,Route, Link,useParams
  } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Carousel} from 'react-bootstrap';
function About(){
let data="Contact Us";
return(
    <Router>
    <div class="abt">
<h1>{data}</h1>
<p class="font-italic">
    This Website is developed by JJ'S Noob Coders.
    Contact:- JJ'S Noob(Insta, FB, TELegram)
</p>
</div>
  <div>
  <Footer />
  </div> 
  </Router>
    );
}
export default About;