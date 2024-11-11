import UserAge from '@/components/UserAge'
import React from 'react'
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
    { name: "Edward", age: 22 },
  ];
  
export default function page() {
  return (
    <div>
       {  users.map((props,index)=>
         <UserAge users ={props}/>
        
        )}

       
        
    </div>
  )
}
