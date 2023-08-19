import { Link } from "react-router-dom";

function Header(props) {
  return <div className="nav">
    <Link to="/">
      <div>Travelog</div>
    </Link>
  </div>
}

export default Header