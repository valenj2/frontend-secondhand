import Header from "../components/header/Header";
import { LateralNav } from "../components/lateralnav/LateralNav";
import styles from "./DashBoardLayout.module.css"
export const DashBoard = ( {children}) => {
  return (
    <div className={styles.container}>
      <LateralNav/>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
