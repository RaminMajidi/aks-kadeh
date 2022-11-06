import React from 'react';
import "./Footer.css"


const Footer = () =>{

    return(
        <footer className='d-flex flex-column flex-lg-row justify-content-evenly align-items-center w-100 bg-info p-2'>
            <div>
                <a title='RaminDev01' className='text-decoration-none text-white' target={'_blank'} href="https://raminDev01.ir"><h6>طراح و توسعه دهنده : رامین مجیدی</h6></a>
            </div>
            <div className='d-flex justify-content-around align-items-center'>
        <div className="fs-3 m-2 social">
            <a title='GitHub' className='text-dark' href="https://github.com/RaminMajidi" target={'_blank'}><i className='bx bxl-github'></i></a>
        </div>
        <div className="fs-3 m-2 social">
            <a title='Instagram' className='text-dark' href="https://www.instagram.com/ramindev01/" target={'_blank'}><i className='bx bxl-instagram'></i></a>
        </div>
        <div className="fs-3 m-2 social">
            <a title='Telegram' className='text-dark' href="https://t.me/ramindev01" target={'_blank'}><i className='bx bxl-telegram'></i></a>
        </div>
        <div className="fs-3 m-2 social">
            <a title='Linkedin' className='text-dark' href="https://www.linkedin.com/in/ramindev01/" target={'_blank'}><i className='bx bxl-linkedin-square'></i></a>
        </div>
    </div>
        </footer>
    )
}

export default Footer;