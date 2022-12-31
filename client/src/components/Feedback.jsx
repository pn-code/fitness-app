import axios from "axios"
import React from "react"
import { useReducer } from "react"
import { useState } from "react"

const Feedback = (props) => {
    const { user } = props;

    const client = `http://localhost:3000`;

    const [feedback, setFeedback] = useState({
        author: user._id,
        email: user.email,
        title: "",
        text: ""
    })

    const handleChange = (e) => {
        setFeedback((prevFeedback) => {
            return { ...prevFeedback, [e.target.name]: e.target.value };
        });
    };

    const handleSubmit = async () => {
        axios({
            method: "POST",
            url: `${client}/feedback`,
            data: { feedback }
        }).then(res => console.log(`Successfully sent message: ${res}`))
    }

    console.log(feedback)
    return (
        <div className="container">
            <form action="" method="post">
                <label htmlFor="title">Title</label>
                <input id="title" name="title" type="text" onChange={handleChange}/>
                <label htmlFor="text">Message</label>
                <textarea name="text" id="text" cols="30" rows="10" onChange={handleChange}></textarea>
                <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Feedback;