import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
    const{feedback} = useContext(FeedbackContext)
    let averageRating = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length;

    averageRating = averageRating.toFixed(1).replace(/[.,]0$/, "");  // if the number has 0 after decimal, it will replaced with empty space 

    return (
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
        </div>
    )
}

export default FeedbackStats