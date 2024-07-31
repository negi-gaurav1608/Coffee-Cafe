import React from 'react'
import ProductCard from '../Layouts/ProductCard'
import aeropress from '../assets/aeropress.jpg'
import chemex from '../assets/chemex.webp'
import nespresso from '../assets/nespresso.jpeg'
const Products = () => {
    return (
        <div className='min-h-screen flex  flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
            <h1 className='font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>
                Our Products
            </h1>
            <div className='flex flex-col lg:flex-row gap-12 justify-center'>
                <ProductCard img={nespresso} title="Nespresso" price="$12.99"/>
                <ProductCard img={chemex} title="Chemex" price="$15.99"/>
                <ProductCard img={aeropress} title="Aeropress" price="$13.99"/>
            </div>
        </div>
    )
}

export default Products
