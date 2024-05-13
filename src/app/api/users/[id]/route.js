import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req , res){
    const data = user.filter((item)=>item.id==res.params.id);
    return NextResponse.json(data.length==0 ? {result: 'No Data' , success: false} : {result : data[0] , success: true} ,{status: 200});
}

export async function PUT(req , res){
    let payload = await req.json(); 
    payload.id = res.params.id;
    console.log( payload);
    if(!payload.id || !payload.name || !payload.email){
        return NextResponse.json({result: "Empty data", success : false} , {status: 400});
    }
    return NextResponse.json({result: payload, success : true} , {status: 200});
}

export function DELETE(req , res){
    const id  = res.params.id;
    if(id){
        return NextResponse.json({result: 'User Deleted' , success : true} , {status: 200});
    }
    else{
        return NextResponse.json({result: 'User Not Found' , success : true} , {status: 200});
    }
}