import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/todo"> ToDo List </Link>
      <Link to="/apis"> API Demo </Link>
      <Link to="/profile"> Profile </Link>
      <Link to="/login"> Login</Link>
    </div>
  );
};
