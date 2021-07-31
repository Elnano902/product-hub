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
            </div>
        </header>

        <section class="py-5">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2>What do we do?</h2>
                        <p class="lead">We connect sellers and buyers from all over Tanzania through self advertisement of products.</p>
                        <p class="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p>
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
                        <h2>Engaging Background Images</h2>
                        <p class="lead">The background images used in this template are sourced from Unsplash and are open source and free to use.</p>
                        <p class="mb-0">I can't tell you how many people say they were turned off from science because of a science teacher that completely sucked out all the inspiration and enthusiasm they had for the course.</p>
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