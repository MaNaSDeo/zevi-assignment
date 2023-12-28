import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Card({
    id,
    image,
    name,
    originalPrice,
    rating,
    review
}){

    const testObj = [
        {
            "id": "63031f84-3312-4782-8df7-dba73f4791b7",
            "name": "Unbranded Fresh Car",
            "price": "Rs4772.00",
            "image": "https://loremflickr.com/480/640/fashion?lock=8956470144008192",
            "rating": 1,
            "reviews": 182,
            "brand": "Parisian - Lockman"
        },{
            "id": "63031f84-3312-4782-8df7-dba73f479189",
            "name": "Unbranded Fresh Car",
            "price": "Rs4772.00",
            "image": "https://loremflickr.com/480/640/fashion?lock=8956470144008192",
            "rating": 1,
            "reviews": 182,
            "brand": "Parisian - Lockman"
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
        return originalPrice*0.9;
    }
    return(
        <div className="card">
                <div className='card-top'>
                    <img src={image} alt={name} />
                    <button
                        className='wishlist-btn'
                        // onClick={() => setWishlist(id)}
                    >
                        <FavoriteBorderOutlinedIcon 
                            
                        />
                    </button>
                </div>
                <div className='card-bottom'>
                    <p className='product-name'>{name}</p>
                    <div className="price-section">
                        <p className="original-price">{originalPrice}</p>
                        <p className="discounted-price">{discountedPrice(originalPrice)}</p>
                    </div>
                    <div className="rating-section">
                        <div className="rating-stars">{ratingComponent(rating)}</div>
                        <p className="reviews">({review})</p>
                    </div>
                </div>
            </div>
    )
}

export default Card
