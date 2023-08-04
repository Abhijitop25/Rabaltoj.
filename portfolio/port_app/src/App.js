import React from 'react';
import  "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import About from './about';
import './index.css';

import {Navbar} from "./Navbar"
import Home from './home';
import Service from './service';
import img4 from './Images/canteen desk.jpg';
import img1 from './Images/newz.jpg';
import img2 from './Images/blog.jpg';
import img3 from './Images/ind 5003.jpg';
import img5 from './Images/11.jpg';
import img6 from './Images/12.jpg';
import img7 from './Images/13.jpg';
import img8 from './Images/sood.jpg';
import img9 from './Images/kunal.jpg';
import img10 from './Images/mix.jpg';
import img11 from './Images/trees.jpg';
import img12 from './Images/farmer.jpg';
import img13 from './Images/81.jpg';
import img14 from './Images/18.jpeg';
function App(){

  return (
    <>
   <div>
    <Navbar/>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img5} class="img-fluid ll"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    
    <div class="carousel-item">
      <img src={img6} class="img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img7} class="img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
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
    
    <div className="App xd" data-aos="slide-up">
      
      <div className='ad container grow'>
      
              
              <img src={img10} className='zz'/>
              <div class="bottom-left">Bottom Left</div>
      </div>
      <div className='bd container grow'>
      
              
              <img src={img13} className='zz'/>
              <div class="bottom-left">Bottom Left</div>
      </div>
      <div className='cd container grow'>
      
              
              <img src={img9} className='zz'/>
              <div class="bottom-left">Bottom Left</div>
      </div>   
  </div>
  </div>
  <div id='carouselExampleCaptions2' className="carousel slide rf" data-aos='fade' data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="img-fluid"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    
    <div class="carousel-item">
      <img src={img12} class="img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img11} class="img-fluid" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="App xd" data-aos="slide-up">
      
      <div className='ad container image-box'>
      
              
              <img src={img10} className='zz'/>
              <div class="bottom-left">Bottom Left</div>
      </div>
      <div className='bd container image-box'>
      
              
              <img src={img11} className='zz'/>
              <a class="bottom-left">Bottom Left</a>
      </div>
      <div className='cd container image-box'>
      
              
              <img src={img12} className='zz'/>
              <div class="bottom-left">Bottom Left</div>
      </div>   
  </div>
  <div>
    <img src={img4} className='ql'/>
    </div> 
  </>
   
   
   
   
    
   
  );
}

export default App;
