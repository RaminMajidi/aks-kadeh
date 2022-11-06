import React from 'react'
import "./Register.css";
import * as Yup from "yup";
import swal from 'sweetalert';
import axios from "axios";
import {useNavigate } from 'react-router-dom';
import FormikControl from '../../formikElements/FormikControl';
import { Formik,Form } from 'formik';
import Spinner from '../../Design/Spinner';
import { Link } from 'react-router-dom';



const Register = () =>{
  const navigate = useNavigate();

//******************************************************* */
// start validation for Register
const initialValuesRegister ={
  phone:"",
  password:"",
  c_password:"",
}

async function onSubmitRegister(values,submitProps){
  const req = await axios.post(`https://authservice.azhadev.ir/api/auth/register`,values);
  if(req.status === 200){
    localStorage.setItem("token",req.data.token);
    submitProps.resetForm();
    submitProps.setSubmitting(false);
    swal("عملیات موفق آمیز بود",`${req.data.message}`,"success");
    navigate(`/User/${req.data.token}`);
  }
  else if(req.status === 202){
    swal("خطا",`${req.data.phone}`,"warning");
    submitProps.setSubmitting(false);
  }
  else{
    swal("خطایی رخ داده !","عملیات انجام نشد لطفا دویاره تلاش کنید","error");
    submitProps.setSubmitting(false);
  }
  }
const validationSchemaRegister = Yup.object({
    phone:Yup.string().required("لطفا فیلد موبایل را پرکنید").length(11,"شماره باید 11 رقم باشد"),
    password : Yup.string().required("لطفا رمز خود را وارد کنید !").matches(/^(?=.*[a-z])/,"حرف کوچک لاتین").matches(/^(?=.*[A-Z])/,"حرف بزرگ لاتین").matches(/^(?=.*[0-9])/,"از اعداد1 تا 9 لاتین").matches(/^(?=.*[!@#\$%\^&\*])/," !@#%&*استفاده از نماد").min(8,"طول رمز باید حداقل 8 کاراکتر باشد"),
    c_password:Yup.string().oneOf([Yup.ref('password'),""],("با رمز عبور مطابقت ندارد !")).required("لطفا فیلد را پر کنید"),
})

//******************************************************* */
// End validation for Register
    return(
        <>
        <div className='p-2 login-container bg-dark'>
        <h3 className=' text-light mb-2 text-center'>فرم ثبت نام</h3>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <Formik
          initialValues={initialValuesRegister}
          onSubmit={onSubmitRegister}
          validationSchema={validationSchemaRegister}
          enableReinitialize
          >{
            
            formik=>{
            
              return(
          <Form className='p-2'>
              <FormikControl
               formik={formik}
               control="input"
               type="text"
               label="شماره موبایل"
               name="phone"
               icon="bx bx-phone"
               />
    
            <FormikControl
               formik={formik}
               control="input"
               type="password"
               label="رمز عبور"
               name="password"
               icon="bx bx-key"/>
    
            <FormikControl
            formik={formik}
            control="input"
            type="password"
            label="تکرار رمز"
            name="c_password"
            icon="bx bx-key"/>           
            {
              !formik.isSubmitting ? (
                <button type="submit" className="w-100 btn btn-primary" disabled={formik.isSubmitting}>ثبت نام</button>
              ):
              (
                <Spinner/>
              )
            }
            <div>
              <Link to="/Login"className='d-inline-block link-primary m-2 login-link' title='ورود'>قبلا ثبت نام کردم</Link>
            </div>   
          </Form>
              )
            }
          }
        </Formik>
         </div>
        </div>
        </>
    )
}

export default Register;