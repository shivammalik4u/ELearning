import React from 'react';
import Carousal3 from '../Images/Carousal 1.jpg';
import Carousal2 from '../Images/Carousal 2.jpg'

const ImageCard = () => {

  // const containerStyle = {
  //   backgroundImage: "url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   padding: '50px',
  // };

  return (
    <div class="container-xxl py-5 bg-light bg-gradient" >
      <div class="container">
        <div class="text-center">
          <h1 class="display-4 mb-4">Grow your skills to advance</h1>
          <p class="lead">with</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6" style={{backdropFilter: 'blur(30px)'}}>
            <div class="service-item text-center p-3 border rounded hover-shadow">
              <i class="bi bi-people h2 text-primary mb-4"></i>
              <h5 class="mt-3">Skilled Instructors</h5>
              <p>Desription</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6" style={{backdropFilter: 'blur(30px)'}}>
            <div class="service-item text-center p-3 border rounded hover-shadow">
              <i class="bi bi-globe h2 text-primary mb-4"></i>
              <h5 class="mt-3">Online Classes</h5>
              <p>Description</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6" style={{backdropFilter: 'blur(30px)'}}>
            <div class="service-item text-center p-3 border rounded hover-shadow">
              <i class="bi bi-house h2 text-primary mb-4"></i>
              <h5 class="mt-3">Home Projects</h5>
              <p>Description</p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6" style={{backdropFilter: 'blur(30px)'}}>
            <div class="service-item text-center p-3 border rounded hover-shadow">
              <i class="bi bi-book h2 text-primary mb-4"></i>
              <h5 class="mt-3">Book Library</h5>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;