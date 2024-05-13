'use client';

import { useEffect, useState } from "react";

export default function Page(props){
    let id = props.params.id;
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');
    const updatedata=()=>{
        console.log(name , age, email);
    }
    useEffect(()=>{
        getUserDetails();
    }, []);
    const getUserDetails = async () => {
        let data = await fetch(`http://localhost:3000/api/users/${id}`);
        data = await data.json();
        setName(data.result.name);
        setAge(data.result.age);
        setEmail(data.result.email);
    }
    const updateuser= async()=>{
        let result = await fetch(`http://localhost:3000/api/users/${id}` , {
            method: "PUT",
            body: JSON.stringify({name , age , email})
        });
        result = await result.json();
        if(result.success){
            alert('Updated')
        }
        else{
            alert('something went wrong');
        }
        console.log(result);
    }
    return(
        <>
            <h1>Update user details</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name" />
            <input value={age} onChange={(e)=>setAge(e.target.value)} type="text" placeholder="enter age" />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="enter email" />
            <button onClick={updateuser}>Update</button>
        </>
    )
}