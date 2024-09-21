import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import{UserContext} from '../App'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Logout = () => {
    const {setUser}= useContext(UserContext)
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
        MySwal.fire({
          title: "Are you sure?",
          text: "Do you want to exit!",
          icon: "Warning!",
          showCancelButton: true,
          confirmButtonColr: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, I want!",
        }).then((result)=>{
          if(result.isConfirmed){
            localStorage.clear()
            setUser(null)
            navigate("/")
        }
          }
        )};


export default Logout;