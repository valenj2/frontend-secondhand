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
        navigate('/dashboard')
        break;
      case "Usuarios":
        navigate('/users')
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
          { icon: "bx-grid-alt", text: "Productos" },
          { icon: "bx-user", text: "Usuarios" },
          { icon: "bx-cog", text: "salir" },
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
