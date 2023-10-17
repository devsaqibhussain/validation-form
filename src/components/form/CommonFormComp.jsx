
export const FormBox = ({children}) =>{
    return <form className=" m-2 sm:m-6 pb-4 border-2 border-gray-200 rounded-3xl">
        {children}
    </form>
}

export const NameBox= ({props}) => {
    
    return <div className=" m-4 flex flex-col">
        <label 
            htmlFor="name" 
            className=" font-bold text-gray-400"
        >
            User Name:
        </label>
        <input 
            value= {props.values.name}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            id="name" 
            type="text" 
            className=" border-2 px-2 font-semibold placeholder:text-sm rounded-lg placeholder:text-gray-300 border-gray-100 focus:border-b-yellow-400 outline-none duration-500" 
            placeholder="Please enter your full name"
        />
        {props.errors.name && props.touched.name && <p className=" text-xs text-red-400">{props.errors.name}</p>}
    </div>
}

export const EmailBox= ({props}) => {
    return <div className=" m-4 flex flex-col">
        <label 
            htmlFor="email" 
            className=" font-bold text-gray-400"
        >
            Email: 
        </label>
        <input
            value= {props.values.em}
            onChange={props.handleChange}
            onBlur={props.handleBlur} 
            id="email" 
            type="email" 
            className=" border-2 px-2 font-semibold placeholder:text-sm rounded-lg placeholder:text-gray-300 border-gray-100 focus:border-b-yellow-400 outline-none duration-500" 
            placeholder="Please enter your email"
        />
        {props.errors.email && props.touched.email && <p className=" text-xs text-red-400">{props.errors.email}</p>}
    </div>
}

export const PassBox = ({props}) => {
    return <div className=" m-4 flex flex-col">
        <label 
            htmlFor="pass" 
            className=" font-bold text-gray-400"
        >
            Password:
        </label>
        <input 
            value= {props.values.pass}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            id="pass" 
            type="password" 
            className=" border-2 px-2 font-semibold placeholder:text-sm rounded-lg placeholder:text-gray-300 border-gray-100 focus:border-b-yellow-400 outline-none duration-500" 
            placeholder="Please enter your password"
        />
        {props.errors.pass && props.touched.pass && <p className=" text-xs text-red-400">{props.errors.pass}</p>}
    </div>
    
}

export const ConfirmPassBox = ({props}) => {
    return <div className=" m-4 flex flex-col">
        <label 
            htmlFor="confirmpass" 
            className=" font-bold text-gray-400"
        >
            Confirm Password:
        </label>
        <input 
            value= {props.values.confirmpass}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            id="confirmpass" 
            type="password" 
            className=" border-2 px-2 font-semibold placeholder:text-sm rounded-lg placeholder:text-gray-300 border-gray-100 focus:border-b-yellow-400 outline-none duration-500" 
            placeholder="Please confirm your password"
        />
        {props.errors.confirmpass && props.touched.confirmpass && <p className=" text-xs text-red-400">{props.errors.confirmpass}</p>}

    </div>
}

export const Submit = ({text}) => {
    return <div className=" w-full flex justify-center">
        <button className=" py-2 px-4 font-semibold text-white rounded-full bg-gradient-to-r from-yellow-500 to-orange-400">
            {text}
        </button>
    </div>
   
}