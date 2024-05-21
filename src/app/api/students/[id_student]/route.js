import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    console.log(params.id_student)

    const student = await db.users.findUnique({
        where:{
            id_user: Number(params.id_student),
        },
    });
    return NextResponse.json(student)
}

export async function PUT(request, {params}){
    const data = await request.json()

    const studentUpdated = await db.users.update(
        {where:{id_user:Number(params.id_student)},data:data,},
    )

    return NextResponse.json(studentUpdated)
}

export async function DELETE(request, {params}){
    try {
        const studentRemoved = await db.users.delete({
            where:{
                id_user: Number(params.id_student),
            }
        })
        return NextResponse.json(studentRemoved)
    } catch (error) {
        return NextResponse.json(error.message)
    }
}