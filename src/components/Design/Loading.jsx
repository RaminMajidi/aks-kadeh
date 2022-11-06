import React from 'react';
import "./Loading.css";


const Loading = () =>{

    return (
    <section className='loading-container'>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
      </div>
    </section>
    )
}
export default Loading;