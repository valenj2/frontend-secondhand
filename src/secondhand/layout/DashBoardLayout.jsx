import { LateralNav } from "@components/lateralnav/LateralNav";
import styles from "./DashBoardLayout.module.css";
import Header from "../components/header/Header";
export const DashBoard = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <LateralNav />
        <div className={styles.content}>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </>
  );
};
