import './SearchSuggestion.css'
import { trendData } from '../../FakerData/fakerData';

function SearchSuggestion() {
    console.log(trendData)
  return (
    <div className='search-suggestion-page'>
      <div className="card-suggestion">
        <p className="suggestion-heading">
            Latest Trends
        </p>
        <div className="card">
            <div className="card-top">
                <img src='https://loremflickr.com/480/640/fashion?lock=4172764395077632' alt="Apple" />
            </div>
            <p className='product-name'>Apple</p>
        </div>
      </div>
      <div className="text-suggestion">
        <p className="suggestion-heading">
            Popular Suggestions
        </p>
      </div>
    </div>
  )
}

export default SearchSuggestion
