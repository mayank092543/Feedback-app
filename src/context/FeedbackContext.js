import { async } from "q";
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        const fetchFeedback = async () => {
            const response = await fetch("http://localhost:5000/feedback?_sort=id&_order=desc")
            const data = await response.json();

            setFeedback(data);
        }
        fetchFeedback();
    }, []);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    //Delete feedback
    const deleteFeedback = async (id) => {
        if(window.confirm("Are you sure you want to delete this blog???")) {
            const response = await fetch(`http://localhost:5000/feedback/${id}`, {
                method: "DELETE",
                "Content-Type": "application/json"
            })
            setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    //Add feedback
    const addFeedback = async (newFeedback) => {
        const response = await fetch("http://localhost:5000/feedback", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFeedback),
        })
        const data = await response.json()
        setFeedback([data, ...feedback])
    }

    //Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }

    //Update item
    const updatedItem = async (id, updateItem) => {
        const response = await fetch(`http://localhost:5000/feedback/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateItem)
        })
        const newItemData = response.json();
        setFeedback(
            feedback.map((item) => (item.id === id ? {...item, ...newItemData} : item))
        )
    }

    return <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updatedItem}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext