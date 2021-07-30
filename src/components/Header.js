import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.js"

function Header(){
    return(
        <div>
<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <Link className="brand" to ="/home">Product Hub</Link>

  <div class="collapse navbar-collapse" id="navbarNav">
       <Link to="/home">Home</Link>    
       <Link to="/about">About</Link> 
       <Link to="/contact">Contact</Link>  
       <Link to="/login">Login</Link>    
 </div>
   </nav>
        </div>
    );
}
export default Header;