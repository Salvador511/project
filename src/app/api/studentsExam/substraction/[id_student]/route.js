import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    console.log(params.id_student)

    const studentExamAddition = await db.studentsExam.findUnique({
        where:{
            id_user:Number(params.id_student)
        },
    });
    return NextResponse.json(studentExamAddition)
}

export async function PUT(request, {params}){
    const data = await request.json()

    const studentExamAdditionUpdated = await db.users.update({
        where:{
            id_user:Number(params.id_student)
        },
        data:data,},
    )

    return NextResponse.json(studentExamAdditionUpdated)
}