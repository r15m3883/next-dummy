'use client'
import { useState } from "react";
import style from "./addproduct.module.scss";
import { useRouter } from "next/navigation";

export default function Page(){
    const [name , setName ] = useState('');
    const [company , setCompany ] = useState('');
    const [color , setColor ] = useState('');
    const [category , setCategory ] = useState('');
    const router = useRouter();
    const addProduct = async () =>{
        console.log(name,company,color,category);
        let result = await fetch(`http://localhost:3000/api/products` , {
            method : 'POST',
            body:JSON.stringify({name,company,color,category})
        });
        result = await result.json();
        if(result.success){
            router.push('/products/')
        }
    }
    return(
        <>
            <div className={style.div}>
                <h1>Add Products</h1>
                <input className={style.input} type="text" placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)} value={name} />
                <input className={style.input} type="text" placeholder="Enter Company Name" onChange={(e)=>setCompany(e.target.value)} value={company} />
                <input className={style.input} type="text" placeholder="Enter Color Name" onChange={(e)=>setColor(e.target.value)} value={color} />
                <input className={style.input} type="text" placeholder="Enter Category Name" onChange={(e)=>setCategory(e.target.value)} value={category} />
                <button className={style.btn} onClick={addProduct}>Add Product</button>
            </div>
        </>
    )
}