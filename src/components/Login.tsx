import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import "./../App.css";

interface LoginProps {
  setIsAuth: (isAuth: boolean) => void;
}

const Login = ({ setIsAuth }: LoginProps) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <button onClick={loginInWithGoogle}>Googleにログイン</button>
    </div>
  );
};

export default Login;
