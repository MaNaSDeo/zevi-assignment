import { useContext } from 'react';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { ProductContext } from '../../Context/ProductContextProvider';

import './Card.css';

function Card(
//     {
//     id,
//     image,
//     name,
//     originalPrice,
//     rating,
//     review
// }
){
    const { wishlist, updateWishList } = useContext(ProductContext)

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

    function ratingComponent(rating){
        const totalStars = 5;
        const filledStars = Array(rating).fill(<StarIcon sx={{ color: 'rgb(253,211,61)'}} />);
        const emptyStars = Array(totalStars - rating).fill(<StarBorderIcon />);
    
        return (
            <>
                {filledStars}
                {emptyStars}
            </>
        );
    }

    const discountedPrice = (originalPrice) => {
        return Math.trunc(originalPrice*0.9);
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
        <>{testObj.map(element => <div className="card" >
        <div className='card-top'>
            <img src={element.image} alt={element.name} />
            <button
                className='wishlist-btn'
                onClick={() => updateWishList(element.id)}
            >
                {wishlistComponent(element.id)}
            </button>
            <button className='view-product tracking-widest'>View Product</button>
        </div>
        <div className='card-bottom'>
            <p className='product-name'>{element.name}</p>
            <div className="price-section">
                <p className="original-price">Rs.{Math.trunc(element.originalPrice)}</p>
                <p className="discounted-price">Rs.{discountedPrice(element.originalPrice)}</p>
            </div>
            <div className="rating-section">
                <div className="rating-stars">{ratingComponent(element.rating)}</div>
                <p className="reviews">({element.review})</p>
            </div>
        </div>
    </div>)}</>
        
    )
}

export default Card
