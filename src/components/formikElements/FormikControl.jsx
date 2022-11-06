import React from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Date from './Date';
import File from "./File"



const FormikControl = (props) =>{
    switch(props.control){
        case "input" : 
            return <Input {...props}/>

        case "textarea" :
            return <Textarea {...props}/>

        case "select" :
            return <Select {...props}/> 
            
        case "radio" :
            return <Radio {...props}/>
            
        case "checkbox" :
            return <Checkbox {...props}/>

            case "date" :
                return <Date {...props}/>

                case "file" :
                return <File {...props}/>
            
            default:
                break;

    }
}

export default FormikControl;