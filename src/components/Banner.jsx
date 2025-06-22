import React from 'react'

import trailer1 from "../assets/trailer1.mp4"
import trailer2 from "../assets/trailer2.mp4"


const Banner = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <video
    style={{ height: "600px", width: "100%", objectFit: "cover" }}
    className="d-block w-100"
    controls
    autoPlay
    muted
    loop
    >
    <source src={trailer1} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    </div>

    <div className="carousel-item">
    <video
    style={{ height: "600px", width: "100%", objectFit: "cover" }}
    className="d-block w-100"
    controls
    autoPlay
    muted
    loop
    >
    <source src={trailer2} type="video/mp4" />
    Your browser does not support the video tag.
    </video>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner
