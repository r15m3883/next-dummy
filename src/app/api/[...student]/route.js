import { NextResponse } from "next/server";

export async function GET(req , res){
    let studentdetails = res.params.student;
    return NextResponse.json({result : studentdetails} , {status: 200});
}