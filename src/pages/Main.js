import { Outlet, Link } from "react-router-dom";
import Lottie from "lottie-react"
import Sun from '../Sun.json';

function Main(props) {
    return <div>
        <h1>Travelog</h1>
        <Lottie className="sunAnimation" animationData={Sun} />
    </div>
}