import style from'./Footer.module.css';
import logo from '../../../assets/logo.png';

function Footer() {
  return (
    <footer className={`background-color-primary ${style.footer}`}>
      <div className={style.footercontent}>
        <img src={logo} alt="Logo" className={style.footerlogo} />
        <p className={style.copy}>&copy; 2024 Second hand. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
