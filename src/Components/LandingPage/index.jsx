import './LandingPage.css';
import Header from '../Header'
import SearchBox from '../SearchBox'

function index() {
  return (
    <div className='landing-page'>
      <Header />
      <SearchBox />
    </div>
  )
}

export default index