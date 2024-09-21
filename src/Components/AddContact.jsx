import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../assets/Css/form.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaAt, FaPhoneFlip, FaRegAddressCard, FaUserPlus } from 'react-icons/fa6';

const AddContact = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        location: ''
    });
    const [serverErrors, setServerErrors] = useState([]);
    const navigate = useNavigate();

    const handleInput = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:3000/contactmsyt/add-contact', values, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            if (res.data.success) {
                toast.success("New contact added!", {
                    position: "top-right",
                    autoClose: 5000
                });
                navigate('/dashboard');
            }
        }).catch(err => {
            console.log(err);
            if (err.response && err.response.data && err.response.data.errors) {
                setServerErrors(err.response.data.errors);
            } else {
                console.log(err);
            }
        });
    };

    return (
        <div className="add-form-container">
            <form className="add-form" onSubmit={handleSubmit}>
                <h2>Create contact</h2>
                <div className="form-group">
                    <FaUserPlus />
                    <input type="text" placeholder="Enter name" className="form-control" name="name" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <FaAt />
                    <input type="email" placeholder="Enter email" className="form-control" name="email" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <FaPhoneFlip />
                    <input type="text" placeholder="Enter phone number" className="form-control" name="phone" onChange={handleInput} />
                </div>
                <div className="form-group">
                    <FaRegAddressCard />
                    <input type="text" placeholder="Enter Location" className="form-control" name="location" onChange={handleInput} />
                </div>
                <button className="form-btn">Add</button>
                {serverErrors.length > 0 && serverErrors.map((error, index) => (
                    <p key={index} className="error">{error.msg}</p>
                ))}
            </form>
        </div>
    );
};

export default AddContact;
