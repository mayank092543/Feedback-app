import {useState, useContext, useEffect} from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackForm = ()=> {
    const [userInput, setUserInput] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [rating, setRating] = useState("");
    const {addFeedback, feedbackEdit, updatedItem} = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setUserInput(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (event) => {
        if(userInput === "") {
            setBtnDisabled(true);
            setMessage(null);
        } else if (userInput !== "" && userInput.trim().length <= 10) {
            setMessage("Text must be at least 10 characters");
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
        
        setUserInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(userInput.trim().length > 10) {
            const newFeedback = {
                text: userInput,
                rating: rating
            }

            if(feedbackEdit.edit === true) {
                updatedItem(feedbackEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback);
            }
            setUserInput("");
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" value={userInput} onChange={handleTextChange} />
                    {/* <button type="submit">Send</button> */}
                    <Button type="submit" version="secondary" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {
                    message && <div className="message">{message}</div>
                }
            </form>
        </Card>
    )
}

export default FeedbackForm