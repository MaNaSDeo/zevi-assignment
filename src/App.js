import ProductContextProvider from './Context/ProductContextProvider';

import LandingPage from './Components/LandingPage';
import Cart from './Components/Cart'

function App() {
  return (
    <ProductContextProvider>
      {/* <LandingPage /> */}
      <Cart />
    </ProductContextProvider>
  );
}

export default App;
