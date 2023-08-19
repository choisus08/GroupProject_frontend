import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const entry = useLoaderData()

  return (
    <div className="show">
      <h4>{entry.location}</h4>
      <h4>{entry.landmark}</h4>
      <img src={entry.landmark} alt={entry.location} />
      <h4>{entry.dates}</h4>
      <Form action={`/delete/${entry._id}`} method="post">
        <input type="submit" value="Delete Entry" />
      </Form>
    </div>
  )
}
export default Show;