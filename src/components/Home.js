import {Link} from 'react-router-dom';
import background from "../bg4.jpg";
import React from 'react';
function Home(){
    return(
        <div className="home">
            <hr />
               <div className="hom">
               <header class="py-5 bg-image-full" id="bg" style={{ backgroundImage: `url(${background})` }}>
            <div class="text-center my-5" style={{height:'20rem'}}>
                <h1 class="text-black fs-3 fw-bolder">Welcome To Products Hub</h1>
                <p class="text-black-50 mb-0">An Online platform for your Products</p>
                <br></br><br></br><Link className="loghome" to="/Register">Create Account</Link>  
            </div>
        </header>

        <section class="py-5" >
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-9">
                        <h2>What do we do?</h2>
                        <p class="lead">We connect sellers and buyers from all over Tanzania through an Online Platform.</p>
                        <p class="lead">Be a part of Products Hub now by Creating an Account and start buying products at a cheap price and conveniently at Home!</p>
                   
                        <p class="lead">We let Enterprenuers advertise their products for free and connect them to their clients</p>
                        <p class="lead">Create an Account now to meet up with your clients on cloud for free!</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="about" style={{marginTop:'-8%'}} >
 <div class="container py-5">
   <div class="row py-5">
     <div class="col-lg-8 m-auto text-center">
       <h2>Some of Our Products</h2>
       <hr />
     </div>
     <div class="row" id="prod">
       <div class="col-lg-4">
         <img src="../images/clothes.jpg" alt="" class="img-fluid mb-3"/>
         <h5>Clothes</h5>
         <p>Get your own trending clothes from Products Hub now!.</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/edevices.jpg" alt="" class="img-fluid mb-3"/>
         <h5>Electronic devices</h5>
         <p>Get your Home and office necessary electronic machines at a cheap price from Products Hub.</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/jewelleries.jpg" alt="" class="img-fluid mb-3"/>
         <h5>Jewelleries</h5>
         <p>Look stunning at functions by wearing beautiful jewelleries from Products Hub.</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/stationeries.jpg" alt="" class="img-fluid mb-3"/>
         <h5>Stationeries</h5>
         <p>Buy quality stationeries for smooth and better learning and office tasks.</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/accessories.jpg" alt="" class="img-fluid mb-3"/>
         <h5>Accessories</h5>
         <p>Get bags, shoes and watches and other accessories from products Hub at cheap and convenient price.</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/furniture.jpg" alt="" class="img-fluid mb-3"/>
         <h5>Furnitures</h5>
         <p>Stay healthy and safe with furnitures from Products Hub</p>
       </div>
     </div>
   </div>
 </div>

</section >
        
      
                </div> 
            
        </div>
    );
}
export default Home;