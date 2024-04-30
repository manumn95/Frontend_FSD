import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


const Forgetpswd = () => {
  const apiurl = import.meta.env.VITE_LOCAL_URL;
  const [username, setusername] = useState("");
  const [checkcode, setCheckcode] = useState(false);
  const [secretecode, setSecretecode] = useState("");
  const navigate = useNavigate();

  const handleclick = async (event) => {
    event.preventDefault();

    const response = await axios.get(
      apiurl + `/existUser?username=${username}`
    );
    console.log(response);
    if (response?.data?._id) {
      setCheckcode(true);
      setusername("");
    } else {
      alert("User not found");
    }
  };
  const handleVerify = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      apiurl + `/verifycode?code=${secretecode}`
    );
    console.log(response);
    if (response?.data[0]?._id) {
      alert("Verificaton Done");
      navigate("/confirmpswd");
    } else {
      alert(response.data);
    }
  };

  return (
    <>
      {checkcode === true ? (
        <>
          <Navbar></Navbar>
          <div style={{ backgroundColor: "orange" }} className="rounded">
            <h6 className="fs-1  p-3">Enter your Code</h6>
            <form className="container border" style={{ width: "500px" }}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Secrete Code
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="secretecode"
                  onChange={(event) => {
                    setSecretecode(event.target.value);
                  }}
                ></input>
              </div>
              <button className="btn btn-primary mb-3" onClick={handleVerify}>
                Verify
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <Navbar></Navbar>
          <div style={{ backgroundColor: "orange" }} className="rounded">
            <h6 className="fs-1  p-3">Forget Password</h6>
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
                  onChange={(event) => {
                    setusername(event.target.value);
                  }}
                ></input>
              </div>
              <button className="btn btn-primary mb-3" onClick={handleclick}>
                Get code
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default Forgetpswd;