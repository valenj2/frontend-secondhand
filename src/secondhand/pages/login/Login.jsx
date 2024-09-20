import { useState } from "react";
import style from "./Login.module.css";
import Layout from "../../layout/SecondHandLayout.jsx";

import { login } from "../../../store/auth/actions.js";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../../store/auth/selectors.js";

const Login = () => {
  // Redux
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuthenticated)


  // Define los estados para los campos del formulario
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupUserName, setSignupUserName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para el login
    console.log("Login email:", loginEmail);
    console.log("Login password:", loginPassword);
    dispatch(login(loginEmail,loginPassword))
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para el registro
    console.log("Sign up user name:", signupUserName);
    console.log("Sign up email:", signupEmail);
    console.log("Sign up phone:", signupPhone);
    console.log("Sign up password:", signupPassword);
  };

  return (
    <Layout>
      <div className={style.body}>
        <div className={style.main}>
          <input
            type="checkbox"
            id="chk"
            aria-hidden="true"
            className={style.checkbox}
          />
          
          <div className={style.signup}>
            <form className={style.containform} onSubmit={handleSignUp}>
              <label
                htmlFor="chk"
                aria-hidden="true"
                className={`${style.chk} ${style.label}`}
              >
                Sign up
              </label>
              <input
                type="text"
                name="txt"
                placeholder="User name"
                required
                value={signupUserName}
                onChange={(e) => setSignupUserName(e.target.value)}
                className={style.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                className={style.input}
              />
              <input
                type="number"
                name="broj"
                placeholder="BrojTelefona"
                required
                value={signupPhone}
                onChange={(e) => setSignupPhone(e.target.value)}
                className={style.input}
              />
              <input
                type="password"
                name="pswd"
                placeholder="Password"
                required
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                className={style.input}
              />
              <button type="submit" className={style.button}>
                Sign up
              </button>
            </form>
          </div>

          <div className={style.login}>
            <form className={style.containform} onSubmit={handleLogin}>
              <label
                htmlFor="chk"
                aria-hidden="true"
                className={`${style.chk} ${style.label}`}
              >
                Login
              </label>
              <input
                type="username"
                name="Nombre de usuario"
                placeholder="Nombre de usuario"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className={style.input}
              />
              <input
                type="password"
                name="pswd"
                placeholder="contraseña"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className={style.input}
              />
              <button type="submit" className={style.button}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
