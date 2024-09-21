import React,{useEffect, useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import '../assets/Css/form.css';
import axios from 'axios';
import {toast} from "react-toastify";
import { FaAt, FaPhoneFlip, FaRegAddressCard,FaUserPlus} from "react-icons/fa6";

const EditContact = () => {
    const [values, setValues] = useState({
        name: "",
        email:"",
        phone: "",
        location: ""
    });
    const navigate = useNavigate();
    const {id} = useParams()
    const handleInput=(event)=>{
        setValues({...values, [event.target.name]: event.target.value});
    };
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.put("https://127.0.0.1:3000/contactmsyt/update-contact/"+id, values, {
            headers: {
                Authorization: `Berear ${localStorage.getItem('token')}`
            }
            .then((res)=>{
                toast.success("Contact updated successfully", {
                    position: "top-right",
                    autoClose: 5000,
                });
                navigate("/dashboard");
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    
    useEffect(()=>{
        axios.get("http://127.0.0.1:3000/contactmsyt/contacts/"+id, {
            headers: {
                Authorization: `Berear ${localStorage.getItem("token")}`,
            },
        })
        .then((res)=>{
            console.log(res)
            if(res.data.success){
                setValues({
                    name: res.data.name,
                    email:res.data.email,
                    phone:res.data.phone,
                    location:res.data.location
                })
            }
        })
        .catch((err)=>{
            console.log(err);
            
        });

    },[]);

  return (
    <div className="add-form-container">
        <form className="add-form" onSubmit={handleSubmit}>
            <h2>Edit Contact</h2>
            <div className="form-group">
                <FaUserPlus />
                <input type="text" placeholder="Enter Name" className="form-control" name="name" onChange={handleInput} value={values.name}/>
            </div>
            <div className="form-group">
                <FaAt />
                <input type="email" placeholder="Enter Email" className="form-control" name="email" onChange={handleInput} value={values.email}/>
            </div>
            <div className="form-group">
                <FaPhoneFlip />
                <input type="text" placeholder="Enter Phone number" className="form-control" name="phone" onChange={handleInput} value={values.phone} />
            </div>
            <div className="form-group">
                <FaRegAddressCard />
                <input type="text" placeholder="Enter location" className="form-control" name="location" onChange={handleInput} value={values.location}/>
            </div>
            <button className="form-btn">Update</button>
        </form>
    </div>
  )
}

export default EditContact;