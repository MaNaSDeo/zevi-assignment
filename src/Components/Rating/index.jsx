import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Rating({rating}){
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

export default Rating;