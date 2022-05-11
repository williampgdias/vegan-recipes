import React, { useState } from "react";
import './style.css';


const Recipes = ({ subtitle, image }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="recipes">
        <img 
          src={ image } alt=''
          onMouseEnter={() => setIsShown(true)} 
          onMouseLeave={() => setIsShown(false)}
        />

        { isShown && (
          <h3>{ subtitle }</h3>
        )}
      </div>
    </>
  )
}

export default Recipes;