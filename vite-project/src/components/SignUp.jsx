import axios from "axios";
import bcryptjs from "bcryptjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const SignUp = () => {
  const apiurl = "import.meta.env.VITE_LOCAL_URL";

  const [formstate, setFormstate] = useState({
    username: "",
    password: "",
    phone: "",
  });

  const handleChange = (event) => {
    setFormstate({
      ...formstate,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const hashedPassword = await bcryptjs.hash(formstate.password, 0);

    if (formstate.username && formstate.password && formstate.phone) {
      const response = await axios.post(apiurl + "/createUser", {
        username: formstate.username,
        password: hashedPassword,
        phone: formstate.phone,
      });
      console.log(response);
      alert(
        `User ${response.data} created Successfully Please Click Login for Login`
      );
    }
    setFormstate({
      username: "",
      password: "",
      phone: "",
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <div style={{ backgroundColor: "orange" }} className="rounded">
        <h6 className="fs-1  p-3">Sign Up</h6>
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
              value={formstate.username}
              onChange={handleChange}
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
              value={formstate.password}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              name="phone"
              value={formstate.phone}
              onChange={handleChange}
            ></input>
          </div>

          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <Link type="button" className="btn btn-info mb-3 ms-3" to="/Login">
            Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default SignUp;
