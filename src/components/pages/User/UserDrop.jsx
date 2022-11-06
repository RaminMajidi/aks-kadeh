import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import { LoginContext } from '../../context/LoginContext';
import userImage from "../../../assets/images/user.png"
import swal from 'sweetalert';

const UserDrop = () =>{
  const {loginUser,setloginUser} = useContext(LoginContext);
  const navigate = useNavigate();


async function getLogOut(){
  const req = await axios.get(`https://authservice.azhadev.ir/api/auth/logout`,{headers:{'Authorization' : `Bearer ${localStorage.getItem("token")}`}});
  return req;
}

const logOutHandeler = ()=>{
getLogOut()
.then(res=>{
  if(res.status === 200){
    setloginUser(false);
    localStorage.removeItem("token");
    navigate(`/`);
    swal("خروج از حساب","عملیات  با موفقیت انجام شد","success");
  }
}).catch(rej=>{
  swal("اخطار","عملیات خروج انجام نشد","error");
})
}

    return (
        <>
        <div className="dropdown text-end">
          <a href='' className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={userImage} alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small" >
            <li className='text-end'><Link to={`/User/${localStorage.getItem("token")}`} className="dropdown-item">حساب من</Link></li>
            <li><hr /></li>
            <li className='text-end'><button onClick={logOutHandeler} className="dropdown-item">خروج از حساب</button></li>
          </ul>
        </div>
        </>
    )
}

export default UserDrop ;