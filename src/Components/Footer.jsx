import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-3xl mt-8 md:mt-0'>
            <div className='flex flex-col md:flex-row justify-between p-8 md:px-32 px5'>
                <div className='w-full md:w-1/4'>
                    <h1 className='font-semibold text-xl pb-4'>
                        cafePulse
                    </h1>
                    <p className='text-sm '>
                        Welcome to our Coffee house! Explore our Aromatic brews, Savour artisanal flavours, and discover the perfect roas to elevate your daily ritual.
                    </p>
                </div>
                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>
                        Links
                    </h1>
                    <nav className='flex flex-col gap-2'>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>Menu</a>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>About</a>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>Products</a>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>Reviews</a>
                    </nav>
                </div>

                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>
                        Menu
                    </h1>
                    <nav className='flex flex-col gap-2'>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>Cappuccino</a>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>Latte</a>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>Americano</a>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>Espresso</a>
                    </nav>
                </div>

                <div>
                    <h1 className='font-medium text-xl pb-4 pt-5 md:pt-0'>
                        Contact Us
                    </h1>
                    <nav className='flex flex-col gap-2'>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>CafePulsee@gmail.com</a>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>
                            +91 420 108 9211
                        </a>
                        <a href="/" className='hover:text-brightColor transition-all cursor-pointer'>
                            Social media
                        </a>
                        
                    </nav>
                </div>
                
            </div>
            <div>
                <p className='text-center py-4'>@copyright developed by
                {" "}<span className='text-backgroundColor'>Gaurav Negi</span>{" | "}
                    All rights are reserved
                </p>
                    
            </div>
        </div>
    )
}

export default Footer
