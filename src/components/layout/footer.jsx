import React from 'react'
import logo from ""

const Footer = () => {
  return (
    <div>
        <footer class="footer">
        <div class="footer-content">
            <h1>Contact Us</h1>
            <li><a href="mailto: mycompany@gmail.com"><i class="fa-regular fa-envelope"></i>  Email: mycompany@gmail.com</a></li> 
            <li><a href="tel:9712345678"><i class="fa-solid fa-phone-volume"></i>  9712345678</a></li>
            <li><a href="https://maps.app.goo.gl/UH5EJiPT2qJ2UPwi8" target="_blank">  <i class="fa-solid fa-location-dot"></i>  Narayangarh, Chitwan</a></li>
        </div>

        <div class="footer-content">
            <h1>Quick Links</h1>
            <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="./pages/about.html">About Us</a></li>
                <li><a href="./pages/services.html">Services</a></li>
                <li><a href="./pages/gallery.html">Gallery</a></li>
                <li><a href="./pages/testimonial.html">Testimonials</a></li>
                <li><a href="./pages/contact.html">Contact Us</a></li>
            </ul>
        </div>

        <div class="footer-content">
            <h1>About Us</h1>
            <p class="footer-para">KMD Demolition & Asbestos Removal has a team dedicated to the safe removal and replacement of roofs containing asbestos.
            We use environmentally safe disposal methods for hazardous materials.</p>
            <p>5 Years <br /><span>Experience</span></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
