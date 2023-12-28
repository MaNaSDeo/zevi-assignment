import './SearchSuggestion.css'
import { trendData } from '../../FakerData/fakerData'

function SearchSuggestion() {
    console.log(trendData)
  return (
    <div>
      <div className="card-suggestion">
        <p className="suggestion-heading">
            Latest Trends
        </p>
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
