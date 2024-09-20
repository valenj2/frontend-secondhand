import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Layout from "../../layout/SecondHandLayout";
import ProductCard from "@components/cards/productCard/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectLoading,
} from "../../../store/products/selectors";
import { obtenerPrendas } from "../../../store/products/actions";
import Busqueda from "../../components/busqueda/Busqueda";
import Carrusel from "../../components/carrousel/Carrousel";

function Home() {
  const dispatch = useDispatch();
  const prendas = useSelector(selectProducts);
  const isLoading = useSelector(selectLoading);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(obtenerPrendas());
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading) {
      const productosDisponibles = prendas.filter(
        (prenda) => prenda.estado === "Disponible"
      );
      setProducts(productosDisponibles);
    }
  }, [prendas, isLoading]);

  const handleSearch = ({ searchText, searchBy }) => {
    const searchTerm = searchText.toLowerCase();
    const filteredProducts = prendas.filter((prenda) => {
      if (searchBy === "category") {
        return prenda.categoriaPrenda.toLowerCase().includes(searchTerm);
      } else if (searchBy === "description") {
        return prenda.descripcion.toLowerCase().includes(searchTerm);
      }
      return true;
    });

    setProducts(filteredProducts);
  };

  return (
    <Layout>
      <Busqueda onSearch={handleSearch} />
      <div className={styles.home}>
        {isLoading ? (
          <p>Cargando...</p>
        ) : products.length === 0 ? (
          <p>No se ha recibido información</p>
        ) : (
          <section className={styles.productlist}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        )}
        {prendas.length !=0 &&  <Carrusel prendas={prendas} /> }
      
      </div>
    </Layout>
  );
}

export default Home;
