import React from 'react';
import { ErrorMessage, FastField } from 'formik';


const Select = (props)=>{

    const {name,label,options} = props;
    return (
        <>
            <label htmlFor={name} className="frm-lbl">{label}</label>
            <FastField as="select" className="frm-inp" id={name} name={name}>
                {
                    options.map(o=>(
                        <option key={o.id} value={o.id}>{o.value}</option>
                    ))
                }
            </FastField>
            <ErrorMessage name={name}component={"p"} />
        </>
    );

}

export default Select;