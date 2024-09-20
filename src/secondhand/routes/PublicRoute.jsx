// PublicRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ element, redirectTo = '/' }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Si el usuario está autenticado, redirige a la página especificada (ejemplo: la página principal)
  return !isAuthenticated ? element : <Navigate to={redirectTo} />;
};

export default PublicRoute;
