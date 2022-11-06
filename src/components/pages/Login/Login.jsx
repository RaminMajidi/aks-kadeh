import {React,useContext, useEffect, useState} from 'react';
import "./Login.css";
import * as Yup from "yup";
import swal from "sweetalert";
import { Link,useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import FormikControl from '../../formikElements/FormikControl';
import Spinner from '../../Design/Spinner';
import axios from 'axios';
import { LoginContext } from '../../context/LoginContext';

const Login = ()=>{
  const {loginUser,setloginUser} = useContext(LoginContext);
  const [localtoken,setLocalToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  useEffect(()=>{
    if(localtoken){
      navigate(`/User/${localStorage.getItem("token")}`);
    }
  },[])
  
// Start Validation Login 
 const initialValuesLogin ={
  phone:"",
  password:"",
  remember:0,
}
async function onSubmitLogin(values,submitProps){
  const req = await axios.post(`https://authservice.azhadev.ir/api/auth/login`,values);
  if(req.status === 200){
      localStorage.removeItem("token")
      localStorage.setItem("token",req.data.token);
      submitProps.resetForm();
      setloginUser(true);
      navigate(`/User/${req.data.token}`);
  }
   else if(req.status === 203){
      submitProps.setSubmitting(false);
      swal("خطا",`${req.data.message}`,"error");
  }
  else{
      submitProps.setSubmitting(false);
      swal("خطا","مشکلی وجود دارد لطفا مجددا تلاش کنید","error");
  }
}

const validationSchemaLogin = Yup.object({
  phone:Yup.string().required("لطفا فیلد موبایل را پرکنید").length(11,"شماره باید 11 رقم باشد"),
  password: Yup.string().required("رمز عبور اجباری است !"),
})
// End Validation Login 
return(
  <>

    <div className='p-2 login-container bg-dark'>
    <h3 className=' text-light mb-2 text-center'>فرم ورود</h3>
    <div className="d-flex flex-column justify-content-center align-items-center">
    <Formik
      initialValues={initialValuesLogin}
      onSubmit={onSubmitLogin}
      validationSchema={validationSchemaLogin}
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
        control="checkbox"
        label="مرا بخاطر بسپار"
        name="remember"/>           
        {
          !formik.isSubmitting ? (
            <button type="submit" className="w-100 btn btn-primary" disabled={formik.isSubmitting}>ورود</button>
          ):
          (
            <Spinner/>
          )
        }
        <div>
          <Link to="/Register"className='d-inline-block link-success m-2 text-bold' title='ثبت نام'>ثبت نام</Link>
          <Link onClick={()=>swal("پیغام","ببخشید هنوز این امکان رو نداریم","warning")} className='d-inline-block link-danger m-2 text-bold' title='بازیابی رمز'>بازیابی رمز عبور</Link>
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

export default Login;