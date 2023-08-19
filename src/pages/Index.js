import { Link, useLoaderData, Form } from "react-router-dom";

function Index(props) {
  //check variable name for consistency
  const entries = useLoaderData()
  return (
    <div>
      <h2 className="indexForm">New Entry</h2>
      <Form className="indexForm" action="/create" method="post">
        <input type="text" name="location" placeholder="Location" />
        <input type="text" name="landmark" placeholder="Landmark" />
        <input type="text" name="image" placeholder="Picture" />
        <input type="text" name="dates" placeholder="Dates" />
        <input type="submit" value="Create Entry" />
      </Form>
      {entries.map((entry, index) => {
        return (
            <div key={entry._id}>
              <Link to={`/${entry._id}`}>
                <h4>{entry.location}</h4>
              </Link>
              <h4>{entry.landmark}</h4>
              <img src={entry.image} alt={entry.location} />
              <h4>{entry.dates}</h4>
            </div>
        )
      })}
    </div>
  );
}

export default Index;