import React from 'react'
import Buttons from '../Layouts/Buttons'
import coffee from '../assets/coffee.jpeg'
const Home = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB682E]'>
            <div className='w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0'>
                <h1 className='font-semibold text-5xl text-center lg:text-start leading-tight lg:mt-auto mt-4'>
                    Start your day with a steaming cup of coffee
                </h1>
                <p>
                    Boost your productivity and build your mood with a glass of coffee in the morning
                </p>
                <div className='flex flex-row gap-6'>
                    <Buttons title="ADD TO CART"/>
                    <Buttons title="More Menu"/>
                </div>
            </div>
            <div className='relative'>
                <img src={coffee} alt="coffee" />
                <div className='absolute bg-[#AB682E] px-8 py-2 top-5 right-0 rounded-full shadow-[0_200px_50px_rgba(8,_112,_184,_0.7)]'>
                    <h2 className='font-semibold'>
                        14K
                    </h2>
                </div>
                <div className='absolute bg-[#AB682E] px-8 py-2 bottom-0 -left-10 rounded-full'>
                    <h2>
                        Cappuccino
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Home
