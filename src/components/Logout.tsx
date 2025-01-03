import "./../App.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  setIsAuth: (isAuth: boolean) => void;
}

const Logout = ({ setIsAuth }: LoginProps) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
