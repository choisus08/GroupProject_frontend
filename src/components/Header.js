import { Link } from "react-router-dom";

function Header(props) {
  return <nav className="nav">
    <Link style={{textDecoration: "none", color: "rgb(27, 104, 155)"}} to="/">
      <div>Travelog</div>
    </Link>
  </nav>
}

export default Header