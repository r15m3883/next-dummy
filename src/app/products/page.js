import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

async function getProducts(){
    let data = await fetch(`http://localhost:3000/api/products`, {cache : 'no-store'});
    data = await data.json();
    if(data.success){
        return data.result;
    }
    else{
        return {success: false}
    }
}

export default async function Page(){
    const products = await getProducts();
    return(
        <>
        <div>
            <h1>All Products</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Company</th>
                        <th>Category</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product)=>{
                            return(
                                <>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.color}</td>
                                    <td>{product.company}</td>
                                    <td>{product.category}</td>
                                    <td><Link href={`products/${product._id}`} >Edit</Link></td>
                                    <td><DeleteProduct id={product._id} /></td>
                                </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}