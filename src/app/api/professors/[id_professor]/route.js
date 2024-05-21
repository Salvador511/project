import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    const professor = await db.users.findUnique({
        where:{
            id_user: Number(params.id_professor),
        },
    });
    return NextResponse.json(professor)
}

export async function PUT(request, {params}){
    const data = await request.json()

    const professorUpdated = await db.users.update(
        {where:{id_user:Number(params.id_professor)},data:data,},
    )

    return NextResponse.json(professorUpdated)
}