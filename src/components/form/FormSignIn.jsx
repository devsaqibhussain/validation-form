import React from 'react'
import { ConfirmPassBox, EmailBox, FormBox, NameBox, PassBox, Submit } from '../'
import { useFormik } from 'formik'
import { signSchema } from '../Schemas/schemas'

const FormSignIn = () => {
    const onSubmit = () =>{
        window.alert("Form is submitted")
    }
    const {values, errors, handleBlur, handleChange, touched, handleSubmit} = useFormik({
        initialValues:{
            name:"",
            email:"",
            pass: "",
            confirmpass: "",
        },
        validationSchema: signSchema,
        onSubmit
    })
  return (
    
    <FormBox>
        <NameBox props={{errors,values,handleBlur,handleChange,touched}} />
        <EmailBox props={{errors,values,handleBlur,handleChange,touched}}/>
        <PassBox props={{errors,values,handleBlur,handleChange,touched}}/>
        <ConfirmPassBox props={{errors,values,handleBlur,handleChange,touched}}/>
        <Submit props={{handleSubmit}} text="Sign-In"/>
    </FormBox>

  ) 
}

export default FormSignIn