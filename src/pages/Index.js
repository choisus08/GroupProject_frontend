import { Link, useLoaderData, Form, useNavigate } from "react-router-dom";
import { baseUrl } from "../base_url";

function Index(props) {
  const entries = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="index">
      <button className="logout" onClick={async () => {
        await fetch(`${baseUrl}/logout`)
        localStorage.removeItem('loggedIn')
        navigate("/")
      }}>Logout</button>
      <div className="indexForm">
        <h2>Add Entry</h2>
        <Form action="/create" method="post">
          <input className="input" type="text" name="location" placeholder="Location" />
          <input className="input" type="text" name="landmark" placeholder="Landmark" />
          <input className="input" type="text" name="image" placeholder="Picture" />
          <input className="input" type="date" name="dates" id="dates" />
          <input className="createBtn" type="submit" value="Create Entry" />
        </Form>
      </div>
      
      <div className="divider"></div>

      <div className="entries">
        {entries.map((entry, index) => {
          return (
            <div className="cardContainer" key={entry._id}>
              <Link to={`/${entry._id}`}>
                <img className="image" src={entry.image} alt={entry.location} />
              </Link>
              {/*<h4>{entry.landmark}</h4>
              <img className="image" src={entry.image} alt={entry.location} />*/}
              <h4 className="cardContent">{entry.landmark}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Index;