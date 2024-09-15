// eslint-disable-next-line no-unused-vars
import React from 'react'
import bearImage from '../assets/bear.jpg'

const Card = () => {
  return (
    <div className='card flex flex-col gap-4 p-5 rounded-lg shadow-xl bg-white'>
      <img className='rounded-md' src={bearImage} alt="this is the image of Grizzly Bear" />
      <h2 className='text-3xl font-bold text-slate-900'>John Doe</h2>
      <p className='text-slate-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam veritatis delectus ratione molestiae voluptas laborum similique pariatur itaque dolore quibusdam?</p>
      <a className='bg-indigo-700 text-white w-max px-10 py-2 rounded-md hover:bg-indigo-500 duration-300' href="">Action</a>
    </div>
  )
}

export default Card
