import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    console.log(params.id_student)

    const student = await db.students.findUnique({
        where:{
            id_student: Number(params.id_student),
        },
    });
    return NextResponse.json(student)
}

export async function PUT(request, {params}){
    const data = await request.json()

    const studentUpdated = await db.students.update(
        {where:{id_student:Number(params.id_student)},data:data,},
    )

    return NextResponse.json(studentUpdated)
}