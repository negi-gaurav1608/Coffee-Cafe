import React, { useRef, useState } from 'react';
import { FaX } from 'react-icons/fa6';
import Login2 from './Login2';
import SignIn from './SignIn';
const Login = ({toggle,log}) => {
    const loginRef=useRef();
    const bgImage={
        backgroundImage:"url(https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"100%",
        width:"100%"
    }
    const [signIn,setSignIn]=useState(false);
    const handleSignIn=()=>{
        setSignIn(!signIn);
    }
    window.addEventListener('click',(e)=>{
        if(e.target === loginRef.current){
            toggle();
        }
    })
    const handleCross=()=>{
        toggle();
    }
    return (
        
        <div>
        {
            log &&<div ref={loginRef} className='fixed top-0 w-full h-full z-50 overflow-y-auto'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-md w-[90%] sm:w-auto bg-white'>
                <div>
                    

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center sm:w-[600px] md:w-[700px] relative">
                        {/* Login Form Section */}
                        <div className='top-2 right-2 absolute cursor-pointer h-4' onClick={handleCross}>
                            <FaX size={30}/>
                        </div>

                        {
                            signIn?(
                                <SignIn handleSignIn={handleSignIn}/>
                            ):
                            (
                                <Login2 handleSignIn={handleSignIn}/>
                            )
                        }



                        
                        
                        {/* form image section */}
                        <div className='w-full rounded-r-2xl h-10' style={bgImage}>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        }
            
        </div>
    )
}

export default Login
