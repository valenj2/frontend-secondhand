import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <main className={styles.main}>
        {children}
      </main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
