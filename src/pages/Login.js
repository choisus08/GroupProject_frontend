import { Form } from "react-router-dom";

function Login(props) {
  return <div className="loginForm">
    <h3>Login</h3>
    <Form className="loginInput" action="/login" method="post">
      <input className="input" type="text" name="username" placeholder="Username" />
      <input className="input" type="password" name="password" placeholder="Password" />
      <input className="loginButton" type="submit" value="Login" />
    </Form>
  </div>
}

export default Login;