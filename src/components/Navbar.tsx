import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={"/createpost"}>post</Link>
      <Link to={"/login"}>Login</Link>
    </nav>
  );
};

export default Navbar;
