import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Carrito from '../pages/carrito/Carrito';
import Login from '../pages/login/Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { CheckOut } from '../pages/checkout/CheckOut';
import {TablaUsers} from '../components/tableusers/TablaUsers';
import { TableProducts } from '../components/tableproducts/TableProducts';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/cart" element={<Carrito/>}/>
        <Route path="/checkout" element={<PrivateRoute element={<CheckOut />} />} />
        <Route path="/dashboard" element={<PrivateRoute element={<TablaUsers />} />} />
        <Route path="/users" element={<PrivateRoute element={<TableProducts />} />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
