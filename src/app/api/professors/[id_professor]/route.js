import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    const professor = await db.professor.findUnique({
        where:{
            id_professor: Number(params.id_professor),
        },
    });
    return NextResponse.json(professor)
}

export async function PUT(request, {params}){
    const data = await request.json()

    const professorUpdated = await db.professor.update(
        {where:{id_professor:Number(params.id_professor)},data:data,},
    )

    return NextResponse.json(professorUpdated)
}