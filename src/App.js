import ProductContextProvider from './Context/ProductContextProvider';

// import LandingPage from './Components/LandingPage';
import CardContainer from './Components/CardContainer'

function App() {
  return (
    <ProductContextProvider>
      {/* <LandingPage /> */}
      <CardContainer />
    </ProductContextProvider>
  );
}

export default App;
