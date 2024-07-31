import React from 'react'
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
const Login2 = ({handleSignIn}) => {
    
    const bgImage={
        backgroundImage:"url(https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%"
    }
    
    return (
        
        <div>
        {
            <div className='p-5 '>
                        <h1 className='text-2xl text-gray-600 font-semibold text-center mb-4'>
                            Login
                        </h1>
                        <form className='flex flex-col gap-4'>
                            <div>
                                <label htmlFor="username" className='input-label'>User Name</label>
                                <input type="text" id="username" className='input '/>
                            </div>

                            <div>
                                <label htmlFor="password" className='input-label'>Password</label>
                                <input type="password" id="password" className='input '/>
                            </div>
                        </form>
                        <button className='bg-blue-500 hover:bg-blur-500/80 rounded-full mt-7 text-white py-1 px-5 block w-full'>Submit</button>


                        <p className='mt-3 px-3 text-center text-gray-500 text-sm my-3'>
                            or login with
                        </p>
                        <div className='flex flex-row gap-6 px-3 py-3 pt-3 cursor-pointer justify-center items-center'>
                            <FcGoogle size={30} className='grayscale hover:grayscale-0'/>
                            <FaLinkedinIn size={30} className='hover:text-blue-700'/>
                            <FaTwitter size={30} className='hover:text-blue-700'/>
                                
                        </div>
                        <p className='mb-3 px-3 text-center text-sm text-gray-500'>
                            No account? <span className='text-blue-500 cursor-pointer hover:underline underline-offset-2' onClick={handleSignIn}>create account</span>
                        </p>
            </div>
        }
            
        </div>
    )
}

export default Login2
