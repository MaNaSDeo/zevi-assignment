import ProductContextProvider from './Context/ProductContextProvider';

import LandingPage from './Components/LandingPage';

function App() {
  return (
    <ProductContextProvider>
      <LandingPage />
    </ProductContextProvider>
  );
}

export default App;
