'use client'
import { useEffect, useState } from "react";
import style from "../../addproduct/addproduct.module.scss";
import Link from "next/link";

export default function Page(props){
    const [name , setName ] = useState('');
    const [company , setCompany ] = useState('');
    const [color , setColor ] = useState('');
    const [category , setCategory ] = useState('');
    
    useEffect(()=>{
        getproductDetail()
    } , []);

    const getproductDetail=async()=>{
        let productId = props.params.editproduct;
        let productdata = await fetch(`http://localhost:3000/api/products/${productId}` , {cache: 'no-store'});
        productdata = await productdata.json();
        let result = productdata.result;
        if(productdata.success){
            setName(result.name)
            setCompany(result.company)
            setColor(result.color)
            setCategory(result.category)           
        }
        console.log(productdata);
    }
    const updateproduct = async () =>{
        let productId = props.params.editproduct;
        let updatedata = await fetch(`http://localhost:3000/api/products/${productId}` , {
            method : "PUT",
            cache: 'no-store',
            body: JSON.stringify({name, company, color, category})
        });
        updatedata = await updatedata.json();
        if(updatedata.result){
            alert('Product Updated');
        }
    }
    return(
        <>
            <div className={style.div}>
                <h1>Update Products</h1>
                <input className={style.input} type="text" placeholder="Enter Product Name" onChange={(e)=>setName(e.target.value)} value={name} />
                <input className={style.input} type="text" placeholder="Enter Company Name" onChange={(e)=>setCompany(e.target.value)} value={company} />
                <input className={style.input} type="text" placeholder="Enter Color Name" onChange={(e)=>setColor(e.target.value)} value={color} />
                <input className={style.input} type="text" placeholder="Enter Category Name" onChange={(e)=>setCategory(e.target.value)} value={category} />
                <button className={style.btn} onClick={updateproduct}>Update Product</button>
                <Link href={`/products/`}>Go Back</Link>
            </div>
        </>
    )
}