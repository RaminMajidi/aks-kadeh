import "./File.css"
import { FastField } from 'formik';
import React from 'react';

const File = ({formik,name,icon,label}) => {
    return (
        <div className="mb-1">
        <label className=" form-label">{label}</label>
        <div className='position-relative'>
        <input type="text" className=" form-control" placeholder={label} 
            value={formik.values[name] ? formik.values[name].name : ""} onChange={()=>null}/>

            <input type="file" name={name} className="form-control inp-file"
            onChange={e=>{
                formik.setFieldValue(name , e.target.files[0])
            }}
            />
            <i className={`${formik.errors[name]?"text-danger":"text-success"} icon  ${icon}`}></i>

        {
            formik.errors[name] ?
            <>
            <p className="error-text text-danger">{formik.errors[name]}</p>
            </>
            : null
        }
        </div>
        </div>
    );
}

export default File;