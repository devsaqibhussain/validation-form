import React from 'react'
import { EmailBox, FormBox, PassBox, Submit } from '../'
import { useFormik } from 'formik'
import { logSchema } from '../Schemas/schemas'

const FormSignIn = () => {
    const {values, errors, handleBlur, handleChange, touched} = useFormik({
        initialValues:{
            email:"",
            pass: "",
        },
        validationSchema: logSchema,
    })
  return (
    
    <FormBox>
        <EmailBox props={{errors,values,handleBlur,handleChange,touched}}/>
        <PassBox props={{errors,values,handleBlur,handleChange,touched}}/>
        <Submit text="Sign-In"/>
    </FormBox>

  ) 
}

export default FormSignIn