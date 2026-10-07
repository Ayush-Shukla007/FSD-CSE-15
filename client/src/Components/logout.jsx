import { useNavigate, Link } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="logout">
      <h1>Logged out successfully</h1>
      <Link to="/">Login here</Link>
    </div>
  );
};

export default Logout;
