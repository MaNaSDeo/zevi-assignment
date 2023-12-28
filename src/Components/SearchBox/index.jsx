import './SearchBox.css';
import {ReactComponent as SearchIcon} from '../../Assets/SearchIcon.svg'

function index() {
  return (
    <div className='search-box'>
      <input 
        type="text"
        placeholder='Search'/>
        <button>
            <SearchIcon className='search-Icon'/>
        </button>
    </div>
  )
}

export default index
