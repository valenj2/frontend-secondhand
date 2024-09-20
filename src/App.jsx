import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './secondhand/components/header/Header';
import Footer from './secondhand/components/footer/Footer';
import Home from './secondhand/pages/home/Home';
import ProductDetail from './secondhand/pages/productdetail/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
