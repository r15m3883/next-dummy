'use client';
import { useState } from "react"

export default function Page(){
    const [file , setFile] = useState();
    const onSubmit = async (e) =>{
        e.preventDefault();
        console.log(file);
        const data = new FormData();
        data.set('file' , file);
        let result = await fetch('api/upload' , {
            method : "POST",
            body: data
        });
        result = await result.json();
        if(result.success){
            alert('File Uploaded');
        }
        console.log(result);
    }
    return(
        <>
        <h1>Upload Image</h1>
        <form onSubmit={onSubmit}>
            <input type="file" name="file" onChange={(e) => setFile(e.target.files?.[0])}/>
            <button type="submit">Upload</button>
        </form>
        </>
    )
}