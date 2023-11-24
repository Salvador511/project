import { NextResponse } from "next/server";
import db from "@/libs/db";


export async function GET(){

    const professors = await db.professors.findMany()

    return NextResponse.json(professors)
}