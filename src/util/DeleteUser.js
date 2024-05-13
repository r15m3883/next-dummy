'use client';
export default function DeleteUser(props){
    console.log(props.id);
    const deleteUser = async()=>{
        let result = await fetch(`http://localhost:3000/api/users/${props.id}`, {
            method: 'DELETE'
        });
        result = await result.json();
        if(result.success){
            alert('Success');
        }
    }
    return(
        <>
            <button onClick={deleteUser}>Delete</button>
        </>
    )
}