import {Link} from 'react-router-dom';
import background from "../bg4.jpg";
import background2 from "../bg2.jpg";

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
       <h1>Some of Products</h1>
     </div>
     <div class="row">
       <div class="col-lg-4">
         <img src="../images/key.jpg" alt="" class="img-fluid mb-3"/>
         <h4>Best ProducTS Quality</h4>
         <p>Thi is the among the products which trends in our companymmcc dbffnf fngg fnnn..</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/blu.jpg" alt="" class="img-fluid mb-3"/>
         <h4>Best ProducTS Quality</h4>
         <p>Thi is the among the products which trends in our companymmcc dbffnf fngg fnnn..</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/wire.jpg" alt="" class="img-fluid mb-3"/>
         <h4>Best ProducTS Quality</h4>
         <p>Thi is the among the products which trends in our companymmcc dbffnf fngg fnnn..</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/key.jpg" alt="" class="img-fluid mb-3"/>
         <h4>Best ProducTS Quality</h4>
         <p>Thi is the among the products which trends in our companymmcc dbffnf fngg fnnn..</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/blu.jpg" alt="" class="img-fluid mb-3"/>
         <h4>Best ProducTS Quality</h4>
         <p>Thi is the among the products which trends in our companymmcc dbffnf fngg fnnn..</p>
       </div>
       <div class="col-lg-4">
         <img src="../images/wire.jpg" alt="" class="img-fluid mb-3"/>
         <h4>Best ProducTS Quality</h4>
         <p>Thi is the among the products which trends in our companymmcc dbffnf fngg fnnn..</p>
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