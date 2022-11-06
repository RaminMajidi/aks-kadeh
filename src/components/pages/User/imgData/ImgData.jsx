import {React,useState } from 'react';
import "./ImgData.css"
import { images,categories } from '../../../../assets/data/links';

const ImgData = ()=>{
const [filter,setFilter] = useState(categories[0])

    return (
        <section className='img-data container p-2 text-center'>
              {categories.length ? (
                   <div className='btn-container p-2 d-flex flex-wrap justify-content-center justify-content-md-around align-items-center m-auto'>
                   {
                        categories.map((item)=>{
                           return(<button key={item} onClick={()=>setFilter(item)} className={`btn m-1 ${filter==item ?"btn-primary" :"btn-danger"}`}>{item}</button>)
                       })
                   }
                   </div>
              ):(
                  <h2 className='text-danger'>دسته بندی یافت نشد</h2>
              )}
              {filter ? ( <section className= 'row w-100 p-1 mx-auto'>
                {
                     images[`${filter}`].map((element,i) => {
                          return (
                              <span key={i} className="img-container col-6 col-md-4 col-lg-3 g-2">
                              <a href={element} download className="download-link" > Download</a>
                                <img className='img-fluid w-100 h-100' src={element} alt={i+"image"} />
                              </span>
                          )
                        })         
                 }
            </section>) : 
            (<h2 className='text-danger' >داده ای برای نمایش وجود ندارد</h2>)
            }
        </section>
    )
}

export default ImgData;