import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(req , res){
    let data = []
        try{
            await mongoose.connect(connectionSrt);
            data = await Product.find();
        } catch (error){
            data={success: false}
        }
    return NextResponse.json({result: data , success: true})
}

export async function POST(req , res){
    const payload = await req.json();
    await mongoose.connect(connectionSrt);
    let product = new Product(payload);
    const result = await product.save();
    return NextResponse.json({result , success:true})
}