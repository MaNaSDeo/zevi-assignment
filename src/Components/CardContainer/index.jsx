import './CardContainer.css';
import Card from '../Card'



function CardContainer() {
    
    
const testObj = [
    {
        "id": "4b373d94-0539-41ca-8d70-f77f9c98347b",
        "name": "Small Steel Shoes",
        "originalPrice": "1317.00",
        "image": "https://loremflickr.com/480/640/fashion?lock=8037515336351744",
        "rating": 4,
        "review": 167,
        "brand": "Nader LLC"
    },{
        "id": "11598a05-779f-4497-a81e-42571123b296",
        "name": "Unbranded Fresh Tuna",
        "originalPrice": "4971.00",
        "image": "https://loremflickr.com/480/640/fashion?lock=3742676826456064",
        "rating": 4,
        "review": 259,
        "brand": "Hills - Jones"
    }
]
    
  return (
    <div className='card-container'>
      {testObj.map(element => <Card
        id={element.id}
        key={element.id}
        image={element.image}
        name={element.name}
        originalPrice={element.price}
        rating={element.rating}
        review={element.reviews}
        /> )}
    </div>
  )
}

export default CardContainer;
