import ProductContextProvider from './Context/ProductContextProvider';

// import LandingPage from './Components/LandingPage';
import Card from './Components/Card'

function App() {
  return (
    <ProductContextProvider>
      {/* <LandingPage /> */}
      <Card />
    </ProductContextProvider>
  );
}

export default App;
