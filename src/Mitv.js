import React from 'react'
import Button from 'react-bootstrap/Button';
import Footer from './Footer'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem,Carousel} from 'react-bootstrap';
function Mitv(){
let data="contact us component"
//<Image src="/100px250" fluid />
return(
    <div>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images-na.ssl-images-amazon.com/images/I/710rArA2OPL._SL1500_.jpg" class="d-block w-100" alt="..."/>
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
<div class="card mb-3">
  <img src="https://c.ndtvimg.com/2019-01/quu11k54_mitv4xpro_625x300_10_January_19.jpg" class="card-img-top" alt="mitv"/>
  <div class="card-body">
    <h5 class="card-title">Mi Smart Tv 42 Inch Display</h5>
    <p class="card-text"> 42000 only</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <button type="button" class="btn btn-success">Buy Now</button>
  </div>
</div>
<div class="card mb-3">
  <img src="http://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1609753743.47133029.png" class="card-img-top" alt="miphone"/>
  <div class="card-body">
    <h5 class="card-title">Mi Note 10</h5>
    <p class="card-text"> 14000 only</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    <button type="button" class="btn btn-success">Buy Now</button>
  </div>
</div>
<Footer />
</div>

    );
}
export default Mitv;