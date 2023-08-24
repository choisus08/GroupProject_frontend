import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const entry = useLoaderData()

  return (
    <div className="show">

      <h4>{entry.location}</h4>
      <h4>{entry.landmark}</h4>
      <img className="showImage" src={entry.image} alt={entry.location} />
      <h4>{entry.dates}</h4>

      <h3>Update {entry.location}</h3>
      <Form className="showForm" action={`/update/${entry._id}`} method='post'>
        <input className="input" type="text" name="location" placeholder="location name" defaultValue={entry.location} />
        <input className="input" type="text" name="landmark" placeholder="landmark name" defaultValue={entry.landmark} />
        <input className="input" type="text" name="dates" placeholder="dates" defaultValue={entry.dates} />
        <input className="input" type="text" name="image" placeholder="image" defaultValue={entry.image} />
        <input className="input" type="submit" value="Update Entry" />
      </Form>

      <Form action={`/delete/${entry._id}`} method="post">
        <input type="submit" value="Delete Entry" />
      </Form>
    </div>
  )
}
export default Show;