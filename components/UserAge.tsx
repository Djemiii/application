import React from 'react'

export default function UserAge({users}:any) {
  return (
    <div>
        
    <h3>
        Nom : {users.name}  , Age {users.age} : 
    </h3>

    </div>
  )
}
