import { DashBoard } from "../../layout/DashBoardLayout";
import style from "./TableProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../../../store/products/selectors";

export const TableProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const handleEdit = (product) => {
    console.log("Edit product:", product);
  };

  const handleDelete = (product) => {
    console.log("Delete product:", product);
  };

  return (
    <DashBoard>
      <div className={style.tableContainer}>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Estado</th>
              <th>Categoría</th>
              <th>Descripcion</th>
              <th>tipotela</th>
              <th>precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.estado}</td>
                <td>{product.categoriaPrenda}</td>
                <td>{product.descripcion}</td>
                <td>{product.tipoTela}</td>
                <td>{product.precio}</td>
                <td className={style.actions}>
                  <i
                    className={`fas fa-edit ${style.Icon}`}
                    onClick={() => handleEdit(product)}
                  ></i>
                  <i
                    className={`fas fa-trash-alt ${style.Icon}`}
                    onClick={() => handleDelete(product)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashBoard>
  );
};
