import { Outlet, Link } from "react-router-dom";
import Lottie from "lottie-react"
import Sun from '../Sun.json';

function Main(props) {
  return <div>
    <Lottie className="sunAnimation" animationData={Sun} />
        <div className="loginButtons">
        <Link to="/signup"><button>Signup</button></Link>
        <Link to="/login"><button>Login</button></Link>
        </div>
    
    <Outlet />
  </div>
}

export default Main;