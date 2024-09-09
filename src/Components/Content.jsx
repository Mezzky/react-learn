// eslint-disable-next-line no-unused-vars
import React from 'react'

const Content = () => {
  
  const foodLezat = "Burger";
  const drinkLezat = "Juice";
  
  return (
    <main>
      <ul>
        <li>{foodLezat}</li>
        <li>{drinkLezat.toUpperCase()}</li>
      </ul>
    </main>
  )
}

export default Content
