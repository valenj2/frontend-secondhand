import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Layout from '../../layout/SecondHandLayout';
import ProductCard from '../../components/cards/productCard/productCard';

// Router
// import { useNavigate } from "react-router-dom";


import { useDispatch, useSelector } from 'react-redux';
import { selectProducts,selectLoading } from '../../../store/products/selectors';
import { obtenerPrendas } from '../../../store/products/actions';

function Home() {
  // const navigate = useNavigate();
  const [products, setProducts] = useState([]);

   // Redux
   const dispatch = useDispatch();

   const prendas = useSelector(selectProducts)
   const isLoading = useSelector(selectLoading)

  useEffect(() => {
    // const randomProducts = [
    //   { id: 1, name: 'Producto 1', description: 'Descripción 1' },
    //   { id: 2, name: 'Producto 2', description: 'Descripción 2' },
    // ];
    dispatch(obtenerPrendas());
    
  }, []);

  useEffect(() => {
    const productosDisponibles = prendas.filter(prenda => prenda.estado === 'Disponible');
    setProducts(productosDisponibles);
  }, [prendas])
  

  return (
    <Layout>
      {isLoading ? <p>Cargando...</p>:
      <div className={styles.home}>
      <section className={styles.productlist}>
        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </section>
    </div>
      }
    </Layout>
  );
}

export default Home;
