import React from 'react'


const About = () => {
  return (
    <>
      <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>About</p>
          </div>
          <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ratione ducimus veniam ipsa dolore, blanditiis cum quas officia iure nam repudiandae ipsum enim tenetur possimus accusantium iste quidem mollitia dolorem!</p>
          <br />
          <p className='text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione asperiores nobis, accusamus officia esse corrupti natus quas, soluta libero nulla totam quis iusto doloremque deleniti aspernatur veritatis porro qui exercitationem.</p>
        </div>
      </div>

    </>
  )
}

export default About