async function getUsers(userid){
    let data = await fetch(`http://localhost:3000/api/users/${userid}`)
    data = await data.json();
    return data;
}

export default async function Page(props){
    let userdata = await getUsers(props.params.id);
    userdata = userdata.result;
    console.log(userdata);
    return(
        <>
        <h1>Single User Details</h1>
        <ul>
            <li>{userdata.id}</li>
            <li>{userdata.name}</li>
            <li>{userdata.age}</li>
            <li>{userdata.email}</li>
        </ul>
        </>
    )
}