import React from 'react';
import img14 from './Images/18.jpeg';
export function Navbar(){
    return(
        
<nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-transparent c-item">
  <div class="container">
    <a class="navbar-brand" href="#">
    <img src={img14} alt="" width="45" height="35"/>
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nm" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Who We Are</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#">Being Agripreneur</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Kisan Ki Baat</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reasearch & Development</a>
        </li><li class="nav-item">
          <a class="nav-link" href="#">Career</a>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>
        
    )
}
