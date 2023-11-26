import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(request) {
  try {
    const data = await request.json();

    const registerFound = await db.registers.findUnique({
      where: {
        email: data.email,
      },
    });

    if (registerFound) {
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
    const newRegister = await db.registers.create({
      data: {
        fullname: data.fullname,
        email: data.email,
        password: hashedPassword,
        id_group: data.id_group,
        isprofessor: data.isprofessor,
        school: data.school
      },
    });

    const { password: _, ...register } = newRegister;

    return NextResponse.json(register);
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