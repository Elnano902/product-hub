import "bootstrap/dist/css/bootstrap.min.css"
import {Link} from 'react-router-dom'
import "bootstrap/dist/js/bootstrap.js"

function Header(){
    return(
        <div className="head">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="brand" to ="/home">Products Hub</Link>

  <div class="collapse navbar-collapse" id="navbarNav">
       <Link to="/home">Home</Link>   
       <Link to="/about">About</Link> 
       <Link to="/contact">Contact</Link>  
       <Link className="log" to="/login">Login</Link>    
 </div>
   </nav>
        </div>
    );
}
export default Header;