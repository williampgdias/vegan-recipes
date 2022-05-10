import React from "react";
import './style.css';

const Cards = ({ children }) => {
  return (
    <div className='cards'>
      { children }
    </div>
  )
}

export default Cards;