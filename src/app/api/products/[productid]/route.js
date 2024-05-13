import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(req , res){
    const productId = res.params.productid;
    const filter = {_id:productId};
    const payload = await req.json();
    console.log(payload);

    await mongoose.connect(connectionSrt);
    const result = await Product.findOneAndUpdate(filter, payload)

    return NextResponse.json({result , success: true});
}
export async function GET(req , res){
    const productId = res.params.productid;
    const filter = {_id:productId};
    await mongoose.connect(connectionSrt);
    const result = await Product.findById(filter);
    return NextResponse.json({result , success: true});
}

export async function DELETE(req , res){
    const productId = res.params.productid;
    const record = {_id: productId};
    await mongoose.connect(connectionSrt);
    const result = await Product.deleteOne(record);
    return NextResponse.json({result, success: true});
}