import { useContext } from 'react';
import './SearchSuggestion.css';
import { ProductContext } from '../../Context/ProductContextProvider';

// import { trendData } from '../../FakerData/fakerData';

function SearchSuggestion() {
    const {trendData} = useContext(ProductContext)
    console.log(trendData)

    function SuggestionCard({
        image,
        name
    }){
        return(
        <div className="card">
            <div className="card-top">
                <img src={image} alt={name} />
            </div>
            <p className='product-name'>{name}</p>
        </div> 
        )
    }

  return (
    <div className='search-suggestion-page'>
      <div className="card-suggestion">
        <p className="suggestion-heading">
            Latest Trends
        </p>
        <div className="suggestion-card-container">
            {trendData.map(element => <SuggestionCard 
                key={element.id}
                image={element.image}
                name={element.name}
            />)}
        </div>
      </div>
      <div className="text-suggestion">
        <p className="suggestion-heading">
            Popular Suggestions
        </p>
        {trendData.map(element => <p key={element.id}>{element.name}</p>)}
      </div>
    </div>
  )
}

export default SearchSuggestion
