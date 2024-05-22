/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {

    const { json } = props
    const [contact,setcontact] = useState(json)
    const [search,setsearch] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        if(search === ''){
            setcontact(json)
        }
    },[search])

    const SearchContact = (e) =>{
     
       setcontact(contact.filter((ele)=>{
            if(ele.name.toUpperCase().includes(e.toUpperCase())){
                return ele
            }
        }))
    }


    const handleTab = () =>{
        navigate('/add')
    }

    console.log(contact,"dd");
    return (
        <div id='home'>
            <header>
                <h1 id='contact_head'>Contacts</h1>
                <button onClick={() => handleTab()} id='new_btn'>+New</button>
                <input id='search' placeholder="Enter the name to be searched..." onChange={(e)=>{setsearch(e.target.value);SearchContact(e.target.value)}}/>
            </header>

            <div id='contacts'>

                {contact.map((obj,i) => {
                    return (
                        <div className='cards' id={`card${i+1}`}>
                            <div className="flex">
                                <img src={require('./images/user.jpg')} id="user_img" />

                                <div>
                                    <h2>{obj.name}</h2>
                                    <span>{obj.relationship}</span>
                                </div>
                            </div>
                            <div id='details'>
                                {/* <h3>Address</h3> */}
                                <p>{obj.phone_no}</p>
                                <p>{obj.address}</p>
                                {/* <h3>Email</h3> */}
                                <p>{obj.email}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home