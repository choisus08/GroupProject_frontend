import { Outlet, Link } from "react-router-dom";
import Lottie from "lottie-react"
import Sun from '../Sun.json';

function Main(props) {
  return <div>
    <h1>Travelog</h1>
    <Lottie className="sunAnimation" animationData={Sun} />
    <h3>Signup</h3>
    <Link to="/signup"><button>Signup</button></Link>
    <h3>Login</h3>
    <Link to="/login"><button>Login</button></Link>
    <Outlet />
  </div>
}

export default Main;