import { useState } from 'react';
import './SearchBox.css';
import {ReactComponent as SearchIcon} from '../../Assets/SearchIcon.svg';
import SearchSuggestion from '../SearchSuggestion';

function SearchBox() {
  const [isSearching, setIsSearching] = useState(false);

  // Set isSearching to true when the input element is clicked
  const handleClick = () => {
    setIsSearching(true);
  };

  // Set isSearching to false when the input element loses focus
  const handleBlur = async () => {
    // Wrap setTimeout in a promise constructor
    await new Promise((resolve) => {
      setTimeout(() => {
        setIsSearching(false);
        resolve(); // Resolve the promise after 5 seconds
      }, 5000);
    });
  };  

  return (
    <div className="search-box-page">
      <div className='search-box'>
        <input 
          type="text"
          placeholder='Search'
          onClick={handleClick} // Use onClick prop
          onBlur={handleBlur} // Use onBlur prop
        />
          <button>
              <SearchIcon className='search-Icon'/>
          </button>
      </div>
      <div className="search-suggestion-box">
        {isSearching?<SearchSuggestion />:<></>}
      </div>
    </div>
  )
}

export default SearchBox;