import React from 'react'
import Button from 'react-bootstrap/Button';
function Footer(){
    let data="contact us component"
    //<Image src="/100px250" fluid />
    return(
        <div class="d-flex flex-column">
  <footer class="footer">
    <div>
      <a href="https://github.com/Janmejay-Joshi">JJ NOOB CODERS</a>
      <span>&copy; 2021 creativeLabs.</span>
    </div>
    <div class="ml-auto">
      <span>Powered by</span>
      <a href="https://github.com/hemantsinghrajput">HEMANT SINGH</a>
    </div>
  </footer>
</div>
        );
    }
export default Footer;