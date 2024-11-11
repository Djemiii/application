import Produitslists from '@/components/Produitslists'
import React from 'react'
const produits = [
    {
        name: "Laptop",
        price: 1200
    },
    {
        name: "Smartphone",
        price: 800
    },
    {
        name: "Casque Audio",
        price: 150
    },
    {
        name: "Montre Connectée",
        price: 200
    },
    {
        name: "Tablette",
        price: 350
    }
];

export default function () {
  return (
    <div>
     {
        produits.map((props,index)=>
        <Produitslists produits={props}/>
        )
     }
    </div>
  )
}
