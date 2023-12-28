import ProductContextProvider from './Context/ProductContextProvider';

// import LandingPage from './Components/LandingPage';
import Filter from './Components/Filter'
import CardContainer from './Components/CardContainer'

function App() {
  return (
    <ProductContextProvider>
      {/* <LandingPage /> */}
      <Filter />
      <CardContainer />
    </ProductContextProvider>
  );
}

export default App;
