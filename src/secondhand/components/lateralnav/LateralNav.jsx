import  { useState } from "react";
import styles from "./LateralNav.module.css";

import logo from "../../../assets/logo.png";

export const LateralNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.menuDashboard} ${isOpen ? styles.open : ""}`}>
      <div className={styles.topMenu}>
        <div className={styles.logo}>
          
          <span><img src={logo} alt="Logo" /></span>
        </div>
        <div className={styles.toggle} onClick={toggleMenu}>
          <i className={`bx ${isOpen ? "bx-x" : "bx-menu"}`}></i>
        </div>
      </div>
      {/* <div className={`${styles.inputSearch} ${isOpen ? styles.open : ''}`}>
        <i className='bx bx-search'></i>
        <input type="text" className={styles.input} placeholder="Buscar" />
      </div> */}
      <div className={styles.menu}>
        {[
          { icon: "bx-grid-alt", text: "Productos" },
          { icon: "bx-user", text: "Usuarios" },
          // { icon: 'bx-grid-alt', text: 'Analíticas' },
          // { icon: 'bx-message-square', text: 'Mensajes' },
          // { icon: 'bx-file-blank', text: 'Archivos' },
          // { icon: 'bx-cart', text: 'Pedidos' },
          // { icon: 'bx-heart', text: 'Favoritos' },
          { icon: "bx-cog", text: "salir" },
        ].map((item, index) => (
          <div
            key={index}
            className={styles.enlace}
            onClick={() => setIsOpen(true)}
          >
            <i className={`bx ${item.icon}`}></i>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
