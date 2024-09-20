import styles from "./Carrito.module.css";
import SecondHandLayout from "../../layout/SecondHandLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectTotalItems,
  selectTotalPrice,
  selectProducts,
} from "../../../store/carrito/selectors";

import { removeProduct } from "../../../store/carrito/actions";
const Carrito = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prendasSeleccionadas = useSelector(selectProducts);
  const precio = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);

  const handleDeleteItem = (id) => {
    dispatch(removeProduct(id))
  };
  const handleBack = () =>{
    navigate('/')
  }
  const handleCheckOut = () =>{
    navigate('/checkout')
  }
  return (
    <SecondHandLayout>
      <div className={styles.card}>
        <div className={styles.row}>
          <div className={`text-color-basic ${styles.cart}`}>
            <div className={styles.title}>
              <div className={` ${styles.row}`}>
                <div className={styles.col}>
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
              </div>
            </div>
            <div
              className={`${styles.items} ${styles.borderTop} ${styles.borderBottom}`}
            >
             
              {prendasSeleccionadas.map((product) => (
                <div
                  key={product.id}
                  className={`${styles.row} ${styles.main}`}
                >
                  <div className={styles.col2}>
                    <img
                      className={`${styles.img} ${styles.imgFluid}`}
                      src={
                        product.url || "https://i.imgur.com/1GrakTl.jpg"
                      } 
                      alt={product.name || "Product Image"} 
                    />
                  </div>
                  <div className={`${styles.col} text-color-basic`}>
                    <div className={`${styles.descripcion} ${styles.row}`}>
                      {product.descripcion}
                    </div>
                   
                  </div>
                  <div className={styles.col}>$ {product.precio}</div>
                  <span
                    className={styles.close}
                    onClick={() => handleDeleteItem(product.id)}
                  >
                    ×
                  </span>
                </div>
              ))}
            </div>
            <div className={styles.backToShop}>
              <a >&larr;</a>
              <span className={styles.textMuted} onClick={handleBack}>Back to shop</span>
            </div>
          </div>
          <div className={`${styles.summary}`}>
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className={styles.row}>
              <div className={`${styles.col} ${styles.paddingLeft0}`}>
                ITEMS {totalItems}
              </div>
              <div className={`${styles.col} ${styles.textRight}`}>
                <b>$ {precio}</b>
              </div>
            </div>
            <form className={styles.form}>
              <p>SHIPPING</p>
              <select className={styles.select}>
                <option className={styles.textMuted}>
                  Standard-Delivery- €5.00
                </option>
              </select>
              <p>GIVE CODE</p>
              <input
                id="code"
                className={styles.input}
                placeholder="Enter your code"
              />
            </form>
            <div
              className={`${styles.row} ${styles.borderTop} ${styles.padding2vh}`}
            >
              <div className={styles.col}>TOTAL PRICE</div>
              <div className={`${styles.col} ${styles.textRight}`}>
                <b>${precio} </b>
              </div>
            </div>
            <button className={styles.btn} onClick={handleCheckOut}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </SecondHandLayout>
  );
};

export default Carrito;
