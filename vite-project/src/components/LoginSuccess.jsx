import { Link } from "react-router-dom";

const LoginSuccess = () => {
  return (
    <div className="fs-5 text-success">
      <h1>Successfully Logged IN</h1>
      <Link to="/Login">Logout</Link>
    </div>
  );
};

export default LoginSuccess;