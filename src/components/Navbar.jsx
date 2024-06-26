// components/Header.js
import React, { useState } from 'react';
import {FaBars, FaTimes}from 'react-icons/fa'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav]=useState(false);
  const links=[
    {
      id:'1',
      link:"home",
    },
    {
      id:'2',
      link:"about",
    },
    {
      id:'3',
      link:"portfolio",
    },
    {
      id:'4',
      link:"experience",
    },
    {
      id:'5',
      link:"contact",
    },
  ];
  return (
    <div className="flex fixed justify-between items-center w-full h-20 px-4 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 text-white p-2 z-40 ">
      
      <h1 className="text-2xl font-extrabold">Arun Kumar Tajpuriya</h1>

      <ul className='  hidden md:flex'>
        {links.map(({id,link})=>(<li key={id}
        className='px-10 cursor-pointer  font-medium text-white hover:scale-105 duration-200 uppercase'>
          <Link to={link} smooth duration={500}>{link}</Link>
        </li>
        ))}
        
      </ul>
      
      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
        {nav ? <FaTimes size={25}/>: <FaBars size={30}/>}
      </div>

      {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white '>
      {links.map(({id,link})=>(<li key={id}
        className='px-4 cursor-pointer uppercase py-6 text-xl '><Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link></li>
        ))}  
      </ul>)}
 
    </div>
  );
};

export default Navbar;

