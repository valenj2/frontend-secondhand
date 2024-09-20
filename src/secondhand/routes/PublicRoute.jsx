import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PublicRoute = ({ element, redirectTo = '/' }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return !isAuthenticated ? element : <Navigate to={redirectTo} />;
};

export default PublicRoute;
