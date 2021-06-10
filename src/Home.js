import React from 'react'
import Button from 'react-bootstrap/Button';
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Carousel,style} from 'react-bootstrap';
import {
  BrowserRouter as Router,Switch,Route, Link,useParams
} from 'react-router-dom';
function Home(){
//<Image src="/100px250" fluid />
return(
  <div>
    <Router>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.gadgets360cdn.com/products/large/mi-tv-4a-40-1300x800-1568712318.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>44,000 Only</h5>
        <p> Smart LED TV WITH WEB AND ANDROID SUPPORT</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://m.economictimes.com/thumb/msid-66372730,width-1200,height-900,resizemode-4,imgsize-547684/mitv-4a-pro.jpg" class="d-block w-100" alt="mitv4"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>49,000 ONLY</h5>
        <p>SMART LED TV WITH NEW FEATURES</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images-na.ssl-images-amazon.com/images/I/71g6MiOiAVL._SL1500_.jpg" class="d-block w-100" alt="mitv"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>21,000 ONLY</h5>
        <p>SMART LED TV MI TV</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div class="card" >
<img src="https://i02.appmifile.com/884_operator_in/30/05/2021/1e91f02cd9aca02f7caf3c5ddadd2747.jpg?width=398&height=230" class="card-img-top" alt="img"/>
<div class="card-body">
  <h5 class="card-title" >Work From Home</h5>
  <p class="card-text">Build your Perfect Network.</p>
  <a href="https://in.event.mi.com/in/offer-with-mi" class="btn btn-primary">Go</a>
</div>
</div>
<div class="card" >
<img src="https://i02.appmifile.com/31_operator_in/25/04/2021/37529e4f2964c9b26a671172950096ae.jpg?width=398&height=230" class="card-img-top" alt="..."/>
<div class="card-body">
  <h5 class="card-title" >Get Times Prime</h5>
  <p class="card-text">Free membership upto worth rupees 60,000.</p>
  <a href="https://in.event.mi.com/in/work-from-home-essentials" class="btn btn-primary">Go</a>
</div>
</div>
    <div>
      <Footer />
      </div> 
      </Router>
</div>
    );
}
export default Home;