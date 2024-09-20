import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../store/carrito/actions";
import { isProductInCart } from "../../../../store/carrito/selectors";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector((state) => isProductInCart(state, product.id)); // Verifica si el producto está en el carrito

  const handleAddCart = () => {
    dispatch(addProduct(product));
  };

  const handleFavorito= () =>{
    console.log("favorito: ", product.id)
  }

  return product ? (
    <div className={styles.card}>
      <img src={product.url} alt="Img-product" className={styles.img} />
      <div className={styles.container}>
        <h4>
          <b><p>{product.descripcion}</p></b>
        </h4>
        <p>
          <b>Tipo de material: </b> {product.tipoTela}
        </p>
        <div className={styles.subdescripcion}>
          <p className={styles.subdescripcionItem}>
            <b>Precio: </b> ${product.precio}
          </p>
        </div>
        <div className={styles.btnContainer}>
          <button className="btn" onClick={handleAddCart} disabled={isInCart}>
            {isInCart ? "En el carrito" : "Añadir al carrito"}
          </button>
        </div>
      </div>
      {/* Icono favorito */}
      <i className={`fas fa-heart ${styles.favoriteIcon}`} onClick={handleFavorito}></i>
    </div>
  ) : (
    <p>Error</p>
  );
};

export default ProductCard;
