import { Form } from "react-router-dom";

function Signup(props) {
  return <div className="signupForm">
    <h3>Sign Up</h3>
    <Form className="signupInput" action="/signup" method="POST">
      <input className="input" type="text" name="username" id="username" placeholder="Username"/>
      <input className="input" type="password" name="password" id="password" placeholder="Password"/>
      <input className="signupButton" type="submit" value="Signup" />
    </Form>
  </div>
}

export default Signup;