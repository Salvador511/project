import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    console.log(params.id_student)

    const studentExamAddition = await db.studentsExam.findUnique({
        where:{
            id_student_id_exam:{
                id_student:Number(params.id_student),
                id_exam: 1
            }
        },
    });
    return NextResponse.json(studentExamAddition)
}

export async function PUT(request, {params}){
    const data = await request.json()

    const studentExamAdditionUpdated = await db.studentsExam.update({
        where:{
            id_student_id_exam:{
                id_student:Number(params.id_student),
                id_exam: 1
            }
        },
        data:data,},
    )

    return NextResponse.json(studentExamAdditionUpdated)
}