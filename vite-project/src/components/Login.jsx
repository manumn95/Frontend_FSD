import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();

  const [formstate, setFormstate] = useState({
    username: "",
    password: "",
  });
  const apiurl = import.meta.env.VITE_LOCAL_URL;
  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      apiurl +
        `/login?username=${formstate.username}&&password=${formstate.password}`
    );

    if (response) {
      navigate("/Success");
    }
  };

  const handlechange = (event) => {
    setFormstate({
      ...formstate,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div style={{ backgroundColor: "orange" }} className="rounded">
        <h6 className="fs-1  p-3">Login</h6>
        <form className="container border" style={{ width: "500px" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              onChange={handlechange}
            ></input>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleUserName" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="password"
              onChange={handlechange}
            ></input>
          </div>
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link type="button" className="btn btn-info mb-3 ms-3 " to="/">
            Sign Up
          </Link>
          <Link type="button" className=" mb-3 ms-3 " to="/Forgetpswd">
            Forget Password
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;