import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(request) {
  try {
    const data = await request.json();

    const studentFound = await db.student.findUnique({
      where: {
        email: data.email,
      },
    });

    if (studentFound) {
      return NextResponse.json(
        {
          message: "Email already exists",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newStudent = await db.student.create({
      data: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: hashedPassword,
        id_group: data.id_group,
        isprofessor: data.isprofessor,
        school: data.school
      },
    });

    const { password: _, ...student } = newStudent;

    return NextResponse.json(student);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}


