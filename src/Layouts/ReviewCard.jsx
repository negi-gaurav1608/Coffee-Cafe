import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'

const ReviewCard = (props) => {
    return (
        <div className='flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5'>
            <div className='flex flex-row items-center lg:justify-start justify-center'>
                <div className='w-1/4'>
                    <img src={props.img} alt="image" className='rounded-full'/>
                </div>
                <div className='mx-3'>
                    <h2 className='mxfont-semibold text-lg'>
                        {props.title}
                    </h2>
                    <div className='flex'>
                        <BsStarFill className='text-brightColor'/>
                        <BsStarFill className='text-brightColor'/>
                        <BsStarFill className='text-brightColor'/>
                        <BsStarFill className='text-brightColor'/>
                        <BsStarHalf className='text-brightColor'/>
                    </div>
                </div>
                
                <span className='ml-16'>
                    <FaQuoteRight size={42} className='text-backgroundColor'/>
                </span>
            </div>
            <p className=''>
                {props.des}
            </p>
        </div>
    )
}

export default ReviewCard
