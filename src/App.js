import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductContextProvider from './Context/ProductContextProvider';

import LandingPage from './Components/LandingPage';
import ProductPage from './Components/ProductPage';

function App() {
  return (
    <Router>
    <ProductContextProvider>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </ProductContextProvider>
    </Router>
  );
}

export default App;