import {Link} from 'react-router-dom';
import {useEffect} from 'react';
import 'bootstrap/dist/js/bootstrap.min.js';

function Login(){
    return(
        <div className="login" style={{marginBottom:'15%'}}>
        <form >
            <h2>Please Login</h2><br></br>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" required></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required></input>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Remember me</label>
  </div><br />
  <button type="submit" class="btn btn-primary" id="btn">Login</button> <br />
  Don't have an Account? <Link to="/Register" onclick="validateForm()">Create Account</Link><br />

</form>
</div>

    );
}
export default Login;