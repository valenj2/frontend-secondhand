import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import style from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalItems } from "../../../store/carrito/selectors";
import { selectIsAuthenticated } from "../../../store/auth/selectors";
import { selectRol } from "../../../store/auth/selectors";
import { performLogout } from "../../../store/auth/actions";
function Header() {
  const navigate = useNavigate();
  const totalItems = useSelector(selectTotalItems);
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuthenticated);
  const rol = useSelector(selectRol);
  const handleLogout = () => {
    dispatch(performLogout());
  };
  const handleLogin = () => {
    navigate("/cart");
  };
  const handleFavorito = () => {
    console.log("to favorite");
  };
  return (
    <header className={`background-color-primary ${style.header}`}>
      <div className={style.headerleft}>
        <Link to="/">
          <img src={logo} alt="Logo" className={style.logo} />
        </Link>
        <h1 className={style.slogan}>Tu Tienda Favorita</h1>
      </div>
      <div className={style.headerright}>
        <i
          className={`fas fa-heart ${style.Icon}`}
          onClick={handleFavorito}
        ></i>
        <div className={style.Link} onClick={handleLogin}>
          <i className={`fas fa-shopping-cart ${style.Icon}`}></i>
          {totalItems > 0 && (
            <span className={style.cartCount}>{totalItems}</span>
          )}
        </div>
        { isAuth && rol == "ROLE_ADMIN" ? (
          <div className={style.Link}>
            <Link to="/dashboard">
              <button className="bntSecondary">Panel de control</button>
            </Link>
          </div>
        ) : null}
        {isAuth ? (
          <div className={style.Link}>
            <button className="bntSecondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className={style.Link}>
            <Link to="/login">
              <button className="bntSecondary">Iniciar sesión</button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
