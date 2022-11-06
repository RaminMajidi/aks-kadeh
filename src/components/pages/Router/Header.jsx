import React, { useContext, useState } from "react";
import "./Header.css"
import { BrowserRouter,Routes,Link, Route } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import User from "../User/User";
import Register from "../Register/Register";
import About from "../About/About";
import Error404 from "../Errors/Error404";
import UserDrop from "../User/UserDrop";
import { LoginContext } from "../../context/LoginContext";
const Header =()=>{
const {loginUser,setloginUser} = useContext(LoginContext);
const [localtoken,setLocalToken] = useState(localStorage.getItem("token"));
return(<BrowserRouter>

<header className="p-2 text-bg-danger  ">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-around justify-content-lg-between ">
          <ul className="nav  my-2 justify-content-center my-md-0 fs-5 ">
            <li className="">
            <Link to='/' className="nav-link px-2 text-dark "><i className="bx bxs-home"><span>خانه</span></i></Link>
            </li>
            <li>
            <Link to='/About' className="nav-link px-2 text-dark"><i className="bx bxs-info-circle"><span>درباره</span></i></Link>
            </li>
          </ul>
          <div className="text-end">
          <Link to={localtoken ? `/User/${localtoken}` : "/Login"} className="btn btn-light text-dark me-2"><i className="bx bxs-lock"><span>ورود </span></i></Link>
          <Link to='/Register' className="btn btn-light text-dark me-2" ><i className='bx bxs-pencil'><span>ثبت نام </span></i></Link>
          </div>
          {loginUser ? 
          ( <UserDrop/>) : null}
      
        </div>
      </div>
  </header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/User/:userToken' element={<User/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="*" element={<Error404/>}/>
    </Routes>
           </BrowserRouter>
    )
}
export default Header;