import { Products } from './reducer';
import { get } from '../apiInstance';

// Actions
export const { setProducts, setProductsByCategory,setLoading,setActivateFailure} = Products.actions;

export const obtenerPrendas = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    // const response = await get(`Acceso/ActivarCuenta?token=${}`);
    const response = await get(`/prendas`);
    if (response.data) {
      dispatch(setProducts(response.data));
      
    } else {
      dispatch(setActivateFailure("error en la peticion"));
    }
  } catch (error) {
    dispatch(setActivateFailure("Error inesperado. Inténtalo de nuevo más tarde.: ", error));
  } finally {
    dispatch(setLoading(false));
  }
};
