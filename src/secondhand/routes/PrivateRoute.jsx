// PrivateRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Si el usuario no está autenticado, redirige a la página de login
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
