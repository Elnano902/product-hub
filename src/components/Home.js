import {Link} from 'react-router-dom';
function Home(){
    return(
        <div className="home">
            <h2 ><hr />
               <p className="hom"> Welcome to Products Hub! This is an E-commerce platform that connects
                Buyers and Sellers and enabling advertisement of products for free.
                <Link to="/Register"> Create Account</Link> to be able to do transactions!
                </p> 
            </h2>
        </div>
    );
}
export default Home;