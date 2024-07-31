import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import Buttons from './Buttons'
const ProductCard = (props) => {
    return (
        <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
            <img src={props.img} alt="image" className='rounded-lg'/>
            <div className='flex flex-col items-center mt-5 gap-3'>
                <h2 className='font-semibold text-xl'>
                    {props.title}
                </h2>
                <div className='flex'>
                    <BsStarFill className='text-brightColor'/>
                    <BsStarFill className='text-brightColor'/>
                    <BsStarFill className='text-brightColor'/>
                    <BsStarFill className='text-brightColor'/>
                    <BsStarHalf className='text-brightColor'/>
                </div>
                <h3 className='font-semibold text-lg'>
                    {props.price}
                </h3>
                <Buttons title="ADD To CART"/>
            </div>
        </div>
    )
}

export default ProductCard
