import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../../../store/carrito/actions';  
import { isProductInCart } from '../../../../store/carrito/selectors'; 
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(state => isProductInCart(state, product.id)); // Verifica si el producto está en el carrito

  const handleAddCart = () => {
    dispatch(addProduct(product));
  };

  return product ? (
    <div className={styles.card}>
      <img src={product.url} alt="Img-product" className={styles.img} />
      <div className={styles.container}>
        <h4>
          <b>{product.descripcion}</b>
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
          <button
            className="btn"
            onClick={handleAddCart}
            disabled={isInCart} 
          >
            {isInCart ? 'En el carrito' : 'Añadir al carrito'} 
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p>Error</p>
  );
};

export default ProductCard;



// <div key={product.id} className={styles.ProductCard}>
//       <div className={styles.imgContainer}>
//         <img className={styles.img} src={product.url} alt="img-product" />
//       </div>
//       <div className={styles.bodycard}>
//         <h2>{product.descripcion}</h2>
//         <p>
//           <b>Tipo de material: </b> {product.tipoTela}
//         </p>
//         <div className={styles.subdescripcion}>
//           <p className={styles.subdescripcionItem}>
//             <b>Estado: </b> {product.estado}
//           </p>
//           <p className={styles.subdescripcionItem}>
//             <b>Precio</b> {product.precio}
//           </p>
//         </div>
//       </div>

//       <button className="btn">Ver Detalles</button>
//     </div>
