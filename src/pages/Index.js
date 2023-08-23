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
        <h2>New Entry</h2>
        <Form action="/create" method="post">
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="landmark" placeholder="Landmark" />
          <input type="text" name="image" placeholder="Picture" />
          <input type="text" name="dates" placeholder="Dates" /><br></br>
          <input className="createBtn" type="submit" value="Create Entry" />
        </Form>
      </div>
      <div className="entries">
        {entries.map((entry, index) => {
          return (
            <div key={entry._id}>
              <Link to={`/${entry._id}`}>
                <h4>{entry.location}</h4>
              </Link>
              <h4>{entry.landmark}</h4>
              <img className="image" src={entry.image} alt={entry.location} />
              <h4>{entry.dates}</h4>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Index;