import React, { useContext, useEffect, useState } from 'react';
import "./User.css";
import { useNavigate,useParams } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Loading from '../../Design/Loading';
import { LoginContext } from '../../context/LoginContext';
import ImgData from './imgData/ImgData';

const User = () =>{
    const {setloginUser} = useContext(LoginContext);
    const [userData,setUserdata] = useState();
    const {userToken} = useParams();
    const navigate = useNavigate();

async function getUser (){
    const req = await axios.get(`https://authservice.azhadev.ir/api/auth/user`,{headers:{'Authorization' : `Bearer ${userToken}`}});
    return req;
}

useEffect(()=>{
    if(userToken){
        getUser()
        .then(res=>{
            if(res.status === 200){
                setloginUser(true);
                setUserdata(res.data);
            }
        })
        .catch(rej=>{
            if(rej.response.status === 401){
                setloginUser(false);
                localStorage.removeItem("token");
                navigate("/Register");
                swal("خطا"," خطایی رخ داد لطفا مجددا تلاش کنید","error");
            }else{
                navigate("/");
                swal("خطا","مشکل در اتصال به سرور","error");  
            }
        });      
      }
},[])
    return(
        <>
        {
        userData ?
        (
            <>
            <section className="p-2 d-flex justify-content-evenly text-info text-center">
                <h6 className=''>آیدی کاربر : {userData.id}</h6>
                <h6 className=''>شماره تلفن : {userData.phone}</h6>
            </section>
            <ImgData/>
            </>
        ) 
        :
        (<Loading/>)
        }
        
        </>
    )
}

export default User;