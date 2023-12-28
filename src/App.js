import ProductContextProvider from './Context/ProductContextProvider';

import LandingPage from './Components/LandingPage';
// import ProductPage from './Components/ProductPage'

function App() {
  return (
    <ProductContextProvider>
      <LandingPage />
      {/* <ProductPage /> */}
    </ProductContextProvider>
  );
}

export default App;
