import React, { useState } from 'react';
import "./Input.css"
import { ErrorMessage, FastField } from 'formik';

const Input = (props)=>{
const [display,setDisplay] = useState("none");
    const {name,type,label,formik,icon} = props;
    return (
        <>
        <div className="mb-1">
          <label className=" form-label ">{label}</label>
        <div className='position-relative'>
          <FastField type={type} name={name} className="form-control frm-inp"  placeholder={label} />
        </div>
        <div className='error-container'>
          <i className={`${formik.errors[name]?"text-danger":"text-success"} icon  ${icon}`}></i>
          {
            formik.errors[name] ?
            <strong className="error-text text-danger mx-4">{formik.errors[name]}</strong>
            : null
          }
          </div>
        </div>

        </>
    );
}

export default Input;