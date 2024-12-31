import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {
  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <p>Login</p>
      <button onClick={loginInWithGoogle}>Googleにログイン</button>
    </div>
  );
};

export default Login;
