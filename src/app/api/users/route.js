import { user } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req , res){
    const data = user;
    return NextResponse.json(data ,{status: 200});
}

export async function POST(req , res){
    let payload = await req.json()
    console.log(payload.name);

    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result: 'No Name'} , {status: 404});
    }
    return NextResponse.json({result: 'new user created' , success : true} , {status: 201});
}