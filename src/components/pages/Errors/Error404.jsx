import React from 'react';
import errGif from "../../../assets/images/puzzled.gif"
 
const Error404 = () =>{
    return(
        <div className='p-3 text-center'>
            <h1 className='text-danger my-2' >خطای 404 رخ داده</h1>
            <h3 className='text-primary my-2'>صفحه مورد نظر یافت نشد</h3>
            <img src={errGif} alt="" className='img-fluid my-5'/>
        </div> 
    )
}

export default Error404;