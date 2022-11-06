import React ,{Fragment}  from 'react';
import { FastField } from 'formik';


const Radio = (props)=>{

const {name,label,options} = props;
    return (
        <div className="mb-2">
            <label htmlFor={name} className="form-label">{label}</label>
            <br />
            <FastField className="form-control" id={name} name={name}>
                {({field})=>{
                    return options.map(o=>(
                        <Fragment key={o.id}>
                            <input 
                            className='form-check-input mx-1'
                            type="radio" 
                            id={o.id}
                            {...field}
                            value={o.id}
                            checked={field.value == o.id}
                            />
                            <label htmlFor={o.id} className="mx-1">{o.value}</label>
                        </Fragment>
                    ))
                }}
            </FastField>
        </div>
    );

}

export default Radio;