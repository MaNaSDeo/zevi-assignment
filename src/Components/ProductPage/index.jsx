import SearchBox from '../SearchBox'
import Filter from "../Filter";
import CardContainer from "../CardContainer";

import './ProductPage.css'

function ProductPage() {
  return (
    <div className='product-page'>
      <SearchBox />
      <p className='search-result-heading'>Search Results</p>
      <div className='rating-and-cards'>
        <div className='filter'>
          <Filter />
        </div>
        <div className='card-container'>
          <CardContainer />
        </div>
      </div>
    </div>
  )
}

export default ProductPage;
