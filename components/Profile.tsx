import React from 'react'

export default function Profile({nom,profession}:any) {
  return (
    <div>
    <h1>
        Nom  :  {nom}
    </h1>
    <p>
        Profession: {profession}
    </p>
</div>
  )
}
