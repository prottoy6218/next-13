
import { NextResponse } from "next/server";

export async function Post(req, res){
    const reqBody = await req.json()

    return NextResponse.json(reqBody)
}