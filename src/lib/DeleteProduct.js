'use client';

import { useRouter } from "next/navigation";

export default function DeleteProduct(props){
    let router = useRouter();
    let deleteRecord = async () => {
        let response = await fetch(`http://localhost:3000/api/products/${props.id}` , {
            method: 'delete'
        });
        response = await response.json();
        if(response.success){
            router.push("/products/");
        }
    }
    return(
        <>
        <button type="button" onClick={deleteRecord}>Delete Button</button>
        </>
    )
}