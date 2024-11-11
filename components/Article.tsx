"use client" ;

import React, { useState } from 'react'




export default function Article({title,content}:any) {
    const[click,setState]=useState("Like")

    const handleClick = ()=> {
    setState(prec=>(prec === "Like" ? "Unlike" : "Like"))

    }
  return (
    <div>Article

          <h2>Titre : {title}</h2>
          <h2>Contenu : {content}</h2>

          <button onClick={handleClick}>
          {click}
          </button>
    </div>
  
  )
}
