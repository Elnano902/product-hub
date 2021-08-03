import {Link} from 'react-router-dom';
import React from 'react';
function About(){
    return(
        <div className="abt">
            <div class="jumbotron color-grey-light mt-100">
      <div class="d-flex align-items-center h-90">
        <div class="container text-center py-0">
          <h3 class="mb-0">About Us</h3>
        </div>
      </div>
    </div>

  <main>
    <div class="container mt-4 mb-5">

      <div class="row">

        <div class="col-lg-4">

          <img class="img-fluid rounded z-depth-5" src="../images/abt.jpg" alt="sample"></img>
        
        </div>


        <div class="col-lg-7">
        <p class="mt-4 mt-lg-0"><b><big>Short Introduction</big></b></p>
        <p>Products Hub enables you to make your own Online Platform for your Business and start selling for greater peaks of profits. Products Hub deals with helping Enterprenuers to connect with their clients in Cloud.</p>
         <p class="mt-4 mt-lg-0"><b>Our Mission</b></p>
          <p>Allowing Enterprenuers meet new clients on cloud and sell more by advertising their products and services for free! <br></br>
             We also allow clients to buy products of their choice online at a cheap price conveniently from anywhere!, Be it at Home or at Hostel. </p>
          <p class="mt-4 mt-lg-0"><b>Our Vision</b></p>
          <p>We plan to make Products Hub as an international online platform for transactions worldwide.
              <br></br>Create an Account now to be a part of Products Hub Plattform.
          </p>
          <Link className="loghome" to="/Register">Create Account</Link> 
        </div>
        


      </div>


    </div>
  </main>
        </div>
      
    );
}
export default About;