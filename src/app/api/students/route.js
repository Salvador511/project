import { NextResponse } from "next/server";
import db from "@/libs/db";


export async function GET(){

    const students = await db.student.findMany()

    return NextResponse.json(students)
}