import { useState } from "react";
import style from "./Busqueda.module.css";

const Busqueda = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("category");

  const handleSearch = () => {
    if (onSearch) {
      onSearch({ searchText, searchBy });
    }
  };

  return (
    <div className={style.busquedaContainer}>
      <div className={style.title}>
        <h2>Búsqueda</h2>
      </div>
      <div className={style.busquedaBody} >
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Introduce tu búsqueda..."
          className={`text-color-primary ${style.form__input} ${style.busquedaItem}`}
          
        />
        <div className={`text-color-primary ${style.dropdown}`} >
          <select
            value={searchBy}
            onChange={(e) => setSearchBy(e.target.value)}
            className={`${style.dropdowncontent} ${style.busquedaItem}`}
            
          >
            <option value="category">Buscar por Categoría</option>
            <option value="description">Buscar por Descripción</option>
          </select>
        </div>
        <button onClick={handleSearch} className={style.busquedaItem}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Busqueda;
