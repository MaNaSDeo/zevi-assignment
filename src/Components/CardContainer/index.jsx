import { useContext } from 'react';

import './CardContainer.css';
import Card from '../Card'

import { ProductContext } from '../../Context/ProductContextProvider';

function CardContainer() {
    const { productsData } = useContext(ProductContext)
    
  return (
    <div className='card-container'>
      {productsData.map(element => <Card
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