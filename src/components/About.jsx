import React from 'react'


const About = () => {
  return (
    <>
      <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>About</p>
          </div>
          <p className='mt-4 text-xl'>I am a Passionate software engineer with a knack for crafting elegant solutions to complex problems. With a solid foundation in computer science and years of hands-on experience, I thrive on turning ideas into reality through code. Whether it's building scalable web applications or designing efficient algorithms, I am dedicated to delivering high-quality software that exceeds expectations. Constantly learning and adapting to new technologies, I'm driven by a relentless pursuit of excellence in every project I undertake.</p>
          <br />
          
        </div>
      </div>

    </>
  )
}

export default About