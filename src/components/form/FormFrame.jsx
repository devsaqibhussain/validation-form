import React from 'react'


const FormFrame = ({children},trigger) => {
  return (
    <div
        className={` h-[800px] w-[300px] sm:w-[400px] pb-5 mx-auto my-10 rounded-2xl overflow-hidden shadow-xl`}
    >
        {children}
    </div>
  )
}

export default FormFrame