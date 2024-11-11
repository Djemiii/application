import React from 'react'

export default function AlertButton({onAlert}:any) {
  return (
    <div>
         <button onClick={onAlert}>
        Afficher Alerte
         </button>

    </div>
  )
}
