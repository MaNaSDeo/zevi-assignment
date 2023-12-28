import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContextProvider'
import './LandingPage.css';
import Header from '../Header';
import SearchBox from '../SearchBox';
// import Cart from '../Cart'
function LandingPage() {

  // const {productsData} = useContext(ProductContext)

  // console.log(productsData)
  return (
    <div className='landing-page'>
      <Header />
      <SearchBox />
      {/* <Cart /> */}
    </div>
  )
}

export default LandingPage;