import './SearchBox.css';
import {ReactComponent as SearchIcon} from '../../Assets/SearchIcon.svg';
import SearchSuggestion from '../SearchSuggestion';

function index() {
  return (
    <div className='search-box'>
      <input 
        type="text"
        placeholder='Search'/>
        <button>
            <SearchIcon className='search-Icon'/>
        </button>
        {/* <SearchSuggestion /> */}
    </div>
  )
}

export default index
