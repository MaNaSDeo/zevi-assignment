import { useState } from 'react';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import './Cart.css';

function CardContainer() {
    

    

    

    

  return (
    <div className='card-container'>
      {testObj.map(element => <CardComponent 
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
