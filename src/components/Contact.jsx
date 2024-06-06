import React from 'react'
import { AiFillHeart } from "react-icons/ai"

const Contact = () => {
  return (
   <>
        <div name="contact" className='py-10 w-full h-full  bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
                    <p className='py-4'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center'>
                    <form action="https://getform.io/f/lakmkqna" method='POST' className='flex flex-col w-full md:w-1/2 '>
                        <input type="text" name='name' placeholder='Enter your full name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'/>
                        <input type="email" name='email' placeholder='Enter your Email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4'/>
                        <textarea name="message" id="" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex place-items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                    </form>
                </div>
               <p className='flex items-center  justify-center'>Copyright @Arun <AiFillHeart className='text-red-500'/> </p>
            </div>
            
            
        </div>
   
   </>
  )
}

export default Contact