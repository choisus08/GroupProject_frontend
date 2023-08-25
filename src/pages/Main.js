import { Outlet, Link } from "react-router-dom";
import Lottie from "lottie-react"
import Sun from '../Sun.json';

function Main(props) {
  return <div className="mainDiv">
    <Lottie className="sunAnimation" animationData={Sun} />
    <div className="loginButtons">
        <Link to="/signup"><button className="signup">Sign Up</button></Link>
        <Link to="/login"><button className="login">Login</button></Link>
    </div>
    
    <Outlet />
  </div>
}

export default Main;