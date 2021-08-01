function Contact(){
    return(
        <div className="nah">
        <div>
        <section id="support" class="support-main-block block-spacing" style={{paddingtop:'0px' ,margintop:'30px'}}>
      <div class="container"style={{margintop:'2px', width:'1530px'}}>
        <div class="row">
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1981.033701602739!2d39.2501047!3d-6.761636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c333ab584af%3A0x96e85df13ce7d8a8!2sCORPORATE+INFORMATION+TECHNOLOGY+SOLUTIONS!5e0!3m2!1sen!2stz!4v1522306660700" width="1520" height="400" frameborder="0" style={{border:'0'}} allowfullscreen></iframe>
       </div>
       </div>
       </section>
       </div>
            
        
            <div id="cont">
<section class="mb-4" >


    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

    <div class="row">


        <div class="col-md-7 mb-md-0 mb-5" >
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

     
                <div class="row">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="name" class="">Your name</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="Name"></input>

                        </div>
                    </div>
      
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                        <label for="email" class="">Your email</label>
                            <input type="text" id="email" name="email" class="form-control" placeholder="Email"></input>

                        </div>
                    </div>


                </div>
      
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                        <label for="subject" class="">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="Subject"></input>

                        </div>
                    </div>
                </div>
    

  
                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                        <label for="message">Your message</label>
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Message"></textarea>

                        </div>

                    </div>
                </div>
            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary" id="btn">Send</a>
            </div>
        
        </div>
        <div class="col-md-3 text-center" id="address">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>Mikocheni A, Dar-es-salaam</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+255 222 771 368</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>frontdesk@cits.co.tz  </p>
                </li>
            </ul>
        </div>

    </div>

</section>
        </div>
        </div>
    );
}
export default Contact;