import { useState } from "react";
import styles from "./LateralNav.module.css";
import { useNavigate } from "react-router-dom";


export const LateralNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (text) => {
    switch (text) {
      case "Productos":
        navigate('/products')
        break;
      case "Usuarios":
        navigate('/dashboard')
        break;
      case "salir":
        navigate('/')
        break;
    }
  };

  return (
    <div
      className={`background-color-primary ${styles.menuDashboard} ${
        isOpen ? styles.open : ""
      }`}
    >
      <div
        className={`${styles.topMenu} ${
          isOpen ? `${styles.topMenuRigth}` : `${styles.topMenuCenter}`
        }`}
      >
        <div className={styles.toggle} onClick={toggleMenu}>
          <i className={`bx ${isOpen ? `bx-x ` : `bx-menu`}`}></i>
        </div>
      </div>
      <div className={styles.menu}>
        {[
          { icon: "bx-user", text: "Usuarios" },
          { icon: "bx-grid-alt", text: "Productos" },
          { icon: "bx-log-out", text: "salir" },
        ].map((item, index) => (
          <div
            key={index}
            className={styles.enlace}
            onClick={() => setIsOpen()}
          >
            <div className={styles.containOption} onClick={() => handleOptionClick(item.text)}>
              <i className={`bx ${item.icon}`}></i>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
