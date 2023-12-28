// import { useContext } from 'react';
// import { ProductContext } from '../../Context/ProductContextProvider'
import './LandingPage.css';
import Header from '../Header';
import SearchBox from '../SearchBox';
// import SearchSuggestion from '../SearchSuggestion';
// import Cart from '../Cart'
function LandingPage() {

  // const {productsData} = useContext(ProductContext)

  return (
    <div className='landing-page'>
      <Header />
      <SearchBox />
      {/* <Cart /> */}
      {/* <SearchSuggestion /> */}
    </div>
  )
}

export default LandingPage;