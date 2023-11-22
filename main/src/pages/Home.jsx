import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaInstagram,FaFacebook,FaGithub,FaLinkedin} from 'react-icons/fa'



const main = () => {
  return (
    <div id='main'>
      <img className="w-full h-screen object-cover" src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-black/30'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-300'> Jakob Pfeifer </h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-300'> 
            <TypeAnimation
      sequence={[
        
        'MongoDb',
        2000, 
        'Express.js',
        2000,
        'React',
        2000,
        'Node.js',
        2000,
        'Tailwind',
        2000,
        'MySql',
        2000,
        'JavaScript',
        2000,
      ]}
      wrapper="span"
      speed={60}
      style={{ fontSize: '1em',paddingLeft: '5px', display: 'inline-block' }}
      repeat={Infinity}
    />

            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full text-white'>
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