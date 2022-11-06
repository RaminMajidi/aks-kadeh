import React from 'react';
import { ErrorMessage, FastField } from 'formik';


const Textarea = (props)=>{

    const {name,label} = props;
    return (
        <>
            <label htmlFor={name} className="frm-lbl">{label}</label>
            <FastField as="textarea" className="frm-inp" id={name} name={name}/>
            <ErrorMessage name={name} className='frm-error' />
        </>
    );

}

export default Textarea;