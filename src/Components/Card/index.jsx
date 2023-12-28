import { useContext } from 'react';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Rating from '../Rating'
import { ProductContext } from '../../Context/ProductContextProvider';

import './Card.css';

function Card({
    id,
    image,
    name,
    originalPrice,
    rating,
    review
}){
    const { wishlist, updateWishList } = useContext(ProductContext);

    const mrp = (originalPrice) => {
        return Math.trunc(originalPrice*1.1);
    }

    function wishlistComponent(id){
        if(wishlist.includes(id)){
            return(
                <>
                    <FavoriteIcon 
                        style={{ 
                            height: '2.5rem',
                            width: '2.5rem',
                            color: 'red'
                        }}
                    />
                </>
            )
        } else{
            return(
                <>
                    <FavoriteBorderOutlinedIcon 
                        style={{ 
                            height: '2.5rem',
                            width: '2.5rem',
                            color: 'white'
                        }}
                    />
                </>
            )
        }
    }

    return(
    <div className="card" >
        <div className='card-top'>
            <img src={image} alt={name} />
            <button
                className='wishlist-btn'
                onClick={() => updateWishList(id)}
            >
                {wishlistComponent(id)}
            </button>
            <button className='view-product tracking-widest'>View Product</button>
        </div>
        <div className='card-bottom'>
            <p className='product-name'>{name}</p>
            <div className="price-section">
                <p className="original-price">Rs.{mrp(originalPrice)}</p>
                <p className="discounted-price">Rs.{Math.trunc(originalPrice)}</p>
            </div>
            <div className="rating-section">
                {/* <div className="rating-stars">{ratingComponent(rating)}</div> */}
                <div className="rating-stars"><Rating rating={rating} /></div>
                <p className="reviews">({review})</p>
            </div>
        </div>
    </div>  
    )
}

export default Card;