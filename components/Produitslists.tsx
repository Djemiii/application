import React from 'react'

export default function Produitslists({produits}:any) {
  return (
    <div>
    <ul>
        <li>{produits.name}</li>
        <li>{produits.price}</li>
    </ul>
</div>
  )
}
