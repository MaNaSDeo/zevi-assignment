import { useContext } from 'react';
import { Link } from "react-router-dom";
import './SearchSuggestion.css';
import { ProductContext } from '../../Context/ProductContextProvider';

function SearchSuggestion() {
    const {trendData} = useContext(ProductContext)

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
            {trendData.map(element => <Link to={'/product'}>
              <SuggestionCard 
                key={element.id}
                image={element.image}
                name={element.name}
              />
            </Link>
            )}
        </div>
      </div>
      <div className="text-suggestion">
        <p className="suggestion-heading">
            Popular Suggestions
        </p>
        {trendData.map(element => <Link to={'/product'}><p key={element.id}>{element.name}</p></Link>)}
      </div>
    </div>
  )
}

export default SearchSuggestion
