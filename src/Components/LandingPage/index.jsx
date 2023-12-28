import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContextProvider'
import './LandingPage.css';
import Header from '../Header'
import SearchBox from '../SearchBox'

function LandingPage() {

  const {productsData} = useContext(ProductContext)

  console.log(productsData)
  return (
    <div className='landing-page'>
      <Header />
      <SearchBox />
    </div>
  )
}

export default LandingPage;