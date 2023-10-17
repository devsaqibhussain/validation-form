import React, { useState } from 'react'
import { FormFrame, FormLogIn, FormSignIn } from './'

import FormDrop from './form/FormDrop'
const HomePage = () => {
    const [isNewAccount, setNewAccount] = useState(false)
    const [ani, setAni] = useState(false)
    const changeState = () =>{
        setAni(true)
        setTimeout(() => {
            setNewAccount(!isNewAccount);
            setAni(false);
        }, 1500);
        
    }
  return (
    <FormFrame trigger={isNewAccount}>
        
        <FormDrop text={!isNewAccount? "Create Account": "Welcome Back!"} trigger={ani}/>
        {!isNewAccount? <FormSignIn/> : <FormLogIn/>}
        <div className=' text-sm text-center text-gray-400 py-2'>{!isNewAccount? "Already have an account? ":"Dont have an account? " }<span onClick={()=>changeState()} className=' text-orange-600 cursor-pointer'>{!isNewAccount? "Sign-In":"Log-In"}</span> here</div>
        
    </FormFrame>
  )
}

export default HomePage