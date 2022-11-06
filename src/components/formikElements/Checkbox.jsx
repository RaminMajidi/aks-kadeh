import React,{Fragment} from 'react';
import { ErrorMessage, FastField } from 'formik';



const Checkbox = (props)  =>{
    
const {name,label,formik} = props;

    return (
        <>
            <div className="mb-3 form-check d-flex justify-content-start">
            <input onChange={(e)=>{formik.values[name] = e.target.checked ? 1 : 0 }} type="checkbox"className="form-check-input" name={name} />
            <label className="form-check-label mx-5">{label}</label>
            </div>
            <ErrorMessage name={name}component={"p"} />
        </>
    );

}

export default Checkbox;