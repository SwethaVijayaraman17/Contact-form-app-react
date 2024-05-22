import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddContact = (props) => {

    const { setjson } = props

    const [success, setsuccess] = useState(false)
    const [input, setinput] = useState({
        name: '',
        phone_no: 0,
        address: '',
        relationship: '',
        email: ''
    })
    const navigate = useNavigate()

    const inputValues = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value })
    }

    const AddContactDetails = () => {
        setjson(current => [...current, input])
        setsuccess(true)
    }

    const BackToHome = () => {
        navigate('/')
    }

    return (
        <form id='add_card'>
            <h1>Add contact Details</h1>

            <label>Enter the name</label>
            <input name="name" onChange={(e) => inputValues(e)} />

            <label>Mobile Number</label>
            <input name="phone_no" onChange={(e) => inputValues(e)} />

            <label>Email</label>
            <input name="email" onChange={(e) => inputValues(e)} />

            <label>Address</label>
            <input name="address" onChange={(e) => inputValues(e)} />

            <label>Relationship</label>
            <input name="relationship" onChange={(e) => inputValues(e)} />

            <button id='add_btn' type="button" onClick={AddContactDetails}>Add</button>
            <button id='add_btn' onClick={BackToHome} className="back_btn">Back to Home</button>
            { success ? <p id='success'>Contact Added Successfully !!!</p> :null }
        </form>
    )
}

export default AddContact