import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';
import { SiCoffeescript } from "react-icons/si";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-scroll";
import Buttons from "../Layouts/Buttons";

const Desktop=[
    {name:"Login",href:"#"}
]
const Navbar = ({setLog}) => {
    const navigate=useNavigate()
    const [menu,setMenu]=useState(false);
    const handleChange=()=>{
        setMenu(!menu);
    }
    const closeMenu=()=>{
        setMenu(false);
    }
    return (
        <div className="fixed w-full z-10">
            <div>
                <div className="flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                    <div className="flex flex-row items-center cursor-pointer gap-2">
                        
                        <span>
                        <Link to="home">
                            <SiCoffeescript size={25}/>
                        </Link>
                            
                        </span>
                        <Link to="home">
                            <h1 className="text-xl">CafePulse</h1>
                        </Link>
                        
                        
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-brightColor cursor-pointer"
                            onClick={closeMenu}
                        >
                            Home
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100">

                            </span>
                        </Link>
                        <Link
                            to="menu"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-brightColor cursor-pointer"
                        >
                            Menu
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-brightColor cursor-pointer"
                        >
                            About us
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            to="products"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-brightColor cursor-pointer"
                        >
                            Products
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            to="review"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="group relative inline-block hover:text-brightColor cursor-pointer"
                        >
                            Reviews
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </Link>
                    </nav>


                    <div className="hidden lg:flex">
                        
                        <a href={Desktop.link} onClick={()=>{
                            setLog(true)
                        }}><Buttons title="Login" /></a>
                        
                    </div>

                    <div className="md:hidden flex items-center cursor-pointer">
                        {menu?(
                            <AiOutlineClose size={25} onClick={handleChange}/>
                        ):
                        (
                            <AiOutlineMenuUnfold size={25} onClick={handleChange}/>
                        )}

                    </div>
                </div>
                <div className={`${menu?"translate-x-0":"-translate-x-full"} lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 h-fit w-full transition-transform duration-300`}>
                        

                    <Link
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block hover:text-brightColor cursor-pointer"
                        onClick={closeMenu}
                    >
                        Home
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100">

                        </span>
                    </Link>
                    <Link
                        to="menu"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block hover:text-brightColor cursor-pointer"
                        onClick={closeMenu}
                    >
                        Menu
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>
                    <Link
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block hover:text-brightColor cursor-pointer"
                        onClick={closeMenu}
                    >
                        About us
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>
                    <Link
                        to="products"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block hover:text-brightColor cursor-pointer"
                        onClick={closeMenu}
                    >
                        Products
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>
                    <Link
                        to="review"
                        spy={true}
                        smooth={true}
                        duration={500}
                        className="group relative inline-block hover:text-brightColor cursor-pointer"
                        onClick={closeMenu}
                    >
                        Reviews
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                    </Link>
                        
                    <a href={Desktop.link} onClick={()=>{
                        setLog(true)
                    }}><Buttons title="Login" /></a>
                    

                </div>
            </div>
        </div>
    );
};

export default Navbar;
