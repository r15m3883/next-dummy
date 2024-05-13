import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";

async function getUsers(){
    let data = await fetch('http://localhost:3000/api/users');
    data = await data.json();
    return data;
}

export default async function Page(){
    const users = await getUsers();
    return(
        <>
            <h1>Users List</h1>
            {
                users.map((user)=>{
                    return(
                        <>
                        <Link href={`users/${user.id}`}>{user.name}</Link>&#160;
                        <Link href={`users/${user.id}/update`}>Edit</Link>
                        <DeleteUser id={user.id} />
                        <br />
                        </>
                    )
                })
            }
        </>
    )
}