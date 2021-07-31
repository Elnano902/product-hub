import {Link} from 'react-router-dom';
import background from "../bg4.jpg";
import background2 from "../bg2.jpg";

function Home(){
    return(
        <div className="home">
            <h2 ><hr />
               <p className="hom">
               <header class="py-5 bg-image-full" id="bg" style={{ backgroundImage: `url(${background})` }}>
            <div class="text-center my-5" style={{height:'20rem'}}>
                <h1 class="text-black fs-3 fw-bolder">Welcome To Products Hub</h1>
                <p class="text-black-50 mb-0">An Online platform for your Products</p>
                <br></br><br></br><Link className="loghome" to="/Register">Create Account</Link>  
            </div>
        </header>

        <section class="py-5">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2>What do we do?</h2>
                        <p class="lead">We connect sellers and buyers from all over Tanzania through an Online Platform.</p>
                        <p class="mb-0">Be a part of Products Hub now by Creating an Account and start buying products at a cheap price and conveniently at Home!</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="py-5 bg-image-full" id="bg" style={{ backgroundImage: `url(${background2})` }}>
            
            <div style={{height:'30rem'}}></div>
        </div>

        <section class="py-5">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2>More About Products Hub</h2>
                        <p class="lead">We let Enterprenuers advertise their products for free and connect them to their clients</p>
                        <p class="mb-0">Create an Account now to meet up with your clients on cloud for free!</p>
                    </div>
                </div>
            </div>
        </section>
                </p> 
            </h2>
        </div>
    );
}
export default Home;