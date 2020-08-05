import React from "react";
import "./LoginCSS.css";
import  {useFormik} from "formik";
import * as Yup from 'yup';

const initialValues={
    name:'',
    password:''
}
const onSubmit= values => {
    console.log('Form data',values)
}
/*
const validate= values=>{
    let errors = {}
    if(!values.name){
        errors.name="Required"
    }
    if(!values.password){
        errors.password="Required"
    }
    return errors
}
*/
const validationSchema = Yup.object({
    name:Yup.string().required("Required"),
    password:Yup.string().required("Required")
})
function Login(){
    const formik = useFormik({
         initialValues,
        onSubmit,
        validationSchema
    })
    console.log("touched",formik.touched)

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>

                <label htmlFor='name'>Username</label>
                <input
                    type={"text"}
                    id="name"
                    name="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}/>
                {formik.touched.name && formik.errors.name?(
                    <div className={'error'}>{formik.errors.name}</div>
                ):null}

                <label htmlFor="password">Password</label>
                <input
                    type={"password"}
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}/>
                {formik.touched.password && formik.errors.password?(
                    <div className={'error'}>{formik.errors.password}</div>
                ):null}

                <button type={"submit"}>Log In</button>

            </form>
        </div>



    );
}
export default Login;