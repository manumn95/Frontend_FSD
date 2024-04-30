import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Confirmpswd = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setconfirm] = useState("");
  const navigate = useNavigate();
  const handleclick = async (event) => {
    event.preventDefault();
    const apiurl = import.meta.env.VITE_LOCAL_URL;
    if (password === confirm) {
      const response = await axios.put(
        apiurl + `/updatepassword?username=${username}&&password=${password}`
      );
      if(response?.data?._id){
        alert("Password reset Successfully");
        navigate("/Login");
      }
    
    } else {
      alert("Password not match");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: "orange" }} className="rounded">
        <h6 className="fs-1  p-3">Create Password</h6>
        <form className="container border" style={{ width: "500px" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter your registered email
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              New Password
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="newpassword"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Confirm Password
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="confirmpassword"
              onChange={(e) => {
                setconfirm(e.target.value);
              }}
            ></input>
          </div>
          <button className="btn btn-primary mb-3" onClick={handleclick}>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Confirmpswd;