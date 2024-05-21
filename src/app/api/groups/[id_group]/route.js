import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    const student = await db.users.findMany({
        where:{
            id_group: params.id_group,
            isprofessor: false
        },
    });
    return NextResponse.json(student)
}