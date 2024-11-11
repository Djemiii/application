"use client";
import React, { useState } from 'react'

  
  

export default function CounterButton({initialCount }:any) {

    const [count, setCount] = useState(initialCount);
  
    const handleClick = () => {
      setCount(count + 1); 
    };
  
    return (
      <div>
        <button  onClick={handleClick}>Compteur: {count}</button>
      </div>
    );
  };
    
  

