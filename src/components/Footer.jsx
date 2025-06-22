import React from 'react'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <footer className="footer">
        <div className="footer-content">
            <img src= {logo} alt="MovieMate" className='footer-logo'/>
            <p>Find your next favorite movie in seconds – smart picks, trending hits, all in one click!</p>
            <div className="social-links">
              <a href="https://www.facebook.com/" target='blank'><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/" target='blank'><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/" target='blank'><i className="fa-brands fa-x-twitter"></i></a>
            </div>
        </div>

        <div className="footer-content">
            <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
            </ul>
        </div>
        
        <div className="footer-content">
            <ul className="footer-links">
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms of Use</a></li>
                <li><a href="">Help Center</a></li>
            </ul>
        </div>
        <div className="footer-content">
            <ul className="footer-links">
              <h1>Watch Now</h1>
                <li><a href="">Action</a></li>
                <li><a href="">Romance</a></li>
                <li><a href="">Thriller</a></li>
                <li><a href="">Comedy</a></li>
                <li><a href="">Sci-Fi</a></li>
            </ul>
        </div>
      </footer>
      <div className="credits">
        <h5>Copyrights © 2025 - Movie-Mate. All Rights Reserved. Designed By: Sujata</h5>
      </div>
    </div>
  )
}

export default Footer
