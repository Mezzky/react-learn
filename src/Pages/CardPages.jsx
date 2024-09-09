// eslint-disable-next-line no-unused-vars
import React from 'react'
import CardLayout from '../Layout/CardLayout'

const CardPages = () => {
  return (
    <div className='w-full flex flex-col gap-10 py-16 px-40 items-center'>
      <div className="title flex flex-col gap-2 w-full items-center">
        <h1 className='text-5xl font-bold'>Here is the Card Pages</h1>
        <p className='w-2/4 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil praesentium animi libero dignissimos officia, delectus eveniet tempore accusantium nostrum itaque.</p>
      </div>
      <CardLayout/>
    </div>
  )
}

export default CardPages
