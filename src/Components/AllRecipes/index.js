import React from "react";
import './style.css';

const AllRecipes = ({ children }) => {
  return (
    <div className='all-recipes'>
      { children }
    </div>
  )
}

export default AllRecipes;