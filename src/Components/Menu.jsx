import React from 'react'
import MenuCard from '../Layouts/MenuCard'
import Ristretto from '../assets/Ristretto.jpeg'
import americano from '../assets/americano.jpeg'
import black from '../assets/black.jpeg'
import espresso from '../assets/espresso.jpeg'
import lattee from '../assets/lattee.jpeg'
import mocha from '../assets/mocha.jpg'
import turkish from '../assets/turkish.jpg'
const Menu = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
            <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>
                Our Menu
            </h1>
            <div className='flex flex-wrap pb-8 gap-8 justify-center '>
                <MenuCard img={espresso} title="Espresso"/>
                <MenuCard img={turkish} title="Turkish Coffee"/>
                <MenuCard img={lattee} title="Latte"/>
                <MenuCard img={black} title="Black Coffee"/>
                <MenuCard img={americano} title="Americano"/>
                <MenuCard img={mocha} title="Mocha"/>
                <MenuCard img={Ristretto} title="Ristretto"/>
            </div>
            
        </div>
    )
}

export default Menu
