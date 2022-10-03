import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackList = () => {
    const {feedback} = useContext(FeedbackContext)
    return (
        <div>
            {
                !feedback || feedback.length === 0 ? <p>No Feedback Yet</p> : 
                <div className="feedback-list">
                    {feedback.map((item) => (
                        <FeedbackItem item={item} key={item.id} />
                    ))}
                </div>
            }
        </div>
    )
}

export default FeedbackList