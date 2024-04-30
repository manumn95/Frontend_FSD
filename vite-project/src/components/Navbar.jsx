import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-brand">
        <div className="container-fluid mb-3 ">
          <Link to="/">Sign Up</Link>
          <Link className="ms-5 " to="/login">
            Login
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
