"use client"

import { useState } from "react"

export default function Page(){
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const addUser= async()=>{
       let data = await fetch('http://localhost:3000/api/users/',{
        method : 'POST',
        body: JSON.stringify({name,age,email})
       });
       data = await data.json();
       if(data.success){
        alert('New USer added')
       }
       else{
        alert('Somthing is empty');
       }
       console.log(data)
    };
    return(
        <>
            <h1>Add New User</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" /><br />
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="Enter age" /><br />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Enter email" /><br />
            <button onClick={addUser}>Add user</button>
        </>
    )
}