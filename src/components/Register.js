import {Link} from 'react-router-dom';

function Register(){
    return(
        <div className="reg">
                  <form>
            <h2>Create Account</h2><br></br>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password"></input>
  </div>
  <div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
    Buyer
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"></input>
    Seller 
</div><br />
  <button type="submit" class="btn btn-primary" id="btn">Sign Up</button> 
  <br></br> Already have an Account? <Link to="/Login">Log In</Link><br />     
</form>
</div>
     
    );
}
export default Register;