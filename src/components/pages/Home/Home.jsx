import React from 'react';
import "./Home.css";
import Footer from '../Router/Footer';

const Home = () =>{

    return (
        <>
        <div className='d-flex justify-content-center align-items-center container-fluid home '>
            <h1 id="welcome-text" className='fs-2 text-center p-3 text-info fw-bold '>به سایت عکس کده خوش آمدید</h1>
        </div>
        <Footer/>
        </>
    )
}

export default Home;