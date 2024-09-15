// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from '../Components/Card'

const CardLayout = () => {
  return (
    <div className='grid grid-cols-1 gap-10 tablet:grid-cols-2 laptop:grid-cols-3 laptop:gap-5'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default CardLayout
