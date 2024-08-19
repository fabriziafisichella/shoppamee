import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Login effettuato");
    router.push("/pages/Home");
  };
  return (
    <div className={style.generalContainer}>
      <form className={style.formContainer} onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default Login;
