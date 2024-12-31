import { signOut } from "firebase/auth";
import { auth } from "../firebase";
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
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
