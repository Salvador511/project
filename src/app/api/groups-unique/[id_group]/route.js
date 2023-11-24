import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(request, {params}){

    const group = await db.group.findUnique({
        where:{
            id_group: Number(params.id_group),
        },
    });
    return NextResponse.json(group)
}