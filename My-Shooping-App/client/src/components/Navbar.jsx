import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/mycart">My Cart</Link>
      <Link to="/myorders">My Orders</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/myprofile">My Profile</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}

export default Navbar;