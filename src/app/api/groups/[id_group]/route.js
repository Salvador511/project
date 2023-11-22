import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    const student = await db.student.findMany({
        where:{
            id_group: Number(params.id_group),
        },
    });
    return NextResponse.json(student)
}