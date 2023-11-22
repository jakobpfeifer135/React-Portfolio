import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaInstagram,FaFacebook,FaGithub,FaLinkedin} from 'react-icons/fa'



const main = () => {
  return (
    <div id='main'>
      <img className="w-full h-screen object-cover" src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-300'> I'm Jakob Pfeifer </h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-300'> I'm a
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        2000,
        'Tech Enthusiast',
        2000,
        'Full Stack Developer',
        1000
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '1em',paddingLeft: '5px', display: 'inline-block' }}
      repeat={Infinity}
    />

            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <FaGithub className='cursor-pointer' size={30} />
                <FaFacebook className='cursor-pointer' size={30} />
                <FaInstagram className='cursor-pointer' size={30} />
                <FaLinkedin className='cursor-pointer'  size={30}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default main