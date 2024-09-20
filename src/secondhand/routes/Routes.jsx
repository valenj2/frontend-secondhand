import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Carrito from '../pages/carrito/Carrito';
import Login from '../pages/login/Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { CheckOut } from '../pages/checkout/CheckOut';
import { DashBoard } from '../layout/DashBoardLayout';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/cart" element={<Carrito/>}/>
        <Route path="/checkout" element={<PrivateRoute element={<CheckOut />} />} />
        <Route path="/dashboard" element={<PrivateRoute element={<DashBoard />} />} />
        
      </Routes>
    </Router>
  );
};

export default AppRoutes;
