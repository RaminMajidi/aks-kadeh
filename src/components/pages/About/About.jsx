import React from 'react';
import Footer from '../Router/Footer';


const About =()=>{

    return(
        <>
        <section className='container'>
            <h2 className='p-2 text-danger'>درباره ما</h2>
            <p className="p-4 fs-5" style={{textAlign:'justify'}}>سایت عکس کده یک سایت برای دانلود عکس های با کیفیت در زمینه های مختلف است . این سایت به عنوان یکی از پروژه های عملی دوره ری اکت سایت کدیاد توسط رامین مجیدی طراحی و کدنویسی شده است . در این  سایت از فریم  ورک  <span className='text-info'>BootStrap</span> و همچنین کتابخانه  <span className='text-info'>React js</span>  استفاده شده . هدف اصلی از ایجاد این وب سایت  ایجاد فرم های ثبت نام  و ورود به سایت بوده است  . در این راستا از  پکیج هایی همچون <span className='text-info'>FORMIC</span> ، <span className='text-info'>AXIOS</span> ، <span className='text-info'>REACT-ROUTER-DOM</span>  و... استفاده شده است . لازم به ذکر است  بک اند  این وب سایت یک <span className='text-danger'>API</span>  واقعی است که توسط استاد مربوط به دوره  جناب آقای بساکی  مدرس  سایت کدیاد طراحی  و کدنویسی شده است.</p>
            <br />
            <h2 className='p-2 text-danger'>راهنمای سایت</h2>
            <p className="p-4 fs-5 " style={{textAlign:'justify'}}>شما برای استفاده و دسترسی به فایل های دانلودی  مجموعه عکس های سایت عکس کده  تنها با عضویت در سایت  که کاملا رایگان است  میتوانید  اقدام به دانلود  نمایید.</p>
            <br />
            <h2 className='p-2 text-danger'>درباره سایت</h2>
            <p className="p-4 fs-5 " style={{textAlign:'justify'}}>در سایت عکس کده همانگونه که پیش تر ذکر شد از کتابخانه <span className='text-info'>REACT JS</span> استفاده شده  و همین امر باعث میشود این سایت یک سایت <span className='text-info'>SPA</span>  باشد سایتهای SPA  یا همان <span className='text-info'>Single Page Application</span>  ها در واقع سایتهای تک صفحه ای هستند که باعث سریعتر رندر شدن سایت در سمت کاربر و در نتیجه فشار و تعامل کمتر به سرور است .</p>
            <br />
            <h2 className='p-2 text-danger'>راهنمای ورود</h2>
            <p className="p-4 fs-5 " style={{textAlign:'justify'}}>از آنجایی که این سایت درحال حاظر در مرحله تست بوده و اگر شما به هر دلیلی نمیخواهید عملیات ثبت نام را انجام دهید اما قصد بازدید از سایت و تماشای نحوه عملکرد آن را دارید میتوانید از شماره تلفن <span className='text-info'>09220943903</span> و رمز عبور <span className='text-info' style={{fontFamily:"Arial Narrow"}}>@aA12345</span>  برای ورود به سایت استفاده کنید.</p>
        </section>
        <Footer/>
        </>
    )
}
export default About;