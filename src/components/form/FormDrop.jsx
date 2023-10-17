import { motion } from 'framer-motion'
import React from 'react'


const FormDrop = ({text, trigger}) => {
  return (
    <div className=' w-full h-[300px] relative'>
        <div className=' relative z-10 text-3xl font-semibold text-white text-center duration-300'>
            <p className='pt-28'>{text}</p>
        </div>
        <motion.div
            variants={{
                sign: {height:500,},
                log: { height: 1200,}
            }}
            initial = {false}
            animate = {!trigger? "sign":"log"} 
            transition={{duration:1, type:"spring", stiffness:50, damping:7}}
            className=' absolute rounded-full bg-gradient-to-b from-yellow-500 to-orange-400 h-[500px] w-[500px] sm:h-[600px] sm:w-[530px] -left-[100px] -top-[200px] sm:-left-[65px] sm:-top-[250px] '
        />
    </div>
  )
}

export default FormDrop