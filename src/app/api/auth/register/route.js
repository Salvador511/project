import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/libs/db";

export async function POST(request) {
  try {
    const data = await request.json();

    // Verificar si el email ya existe
    const registerFound = await db.users.findUnique({
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

    // Crear el nuevo usuario
    const hashedPassword = await bcrypt.hash(data.password, 10);
    let idGroup = null;

    // Si el usuario es un estudiante, verificar y asignar el id_group proporcionado
    if (!data.isprofessor) {
      if (!data.id_group) {
        return NextResponse.json(
          {
            message: "Group ID is required for students",
          },
          {
            status: 400,
          }
        );
      }

      // Verificar si el grupo existe
      const groupFound = await db.group.findUnique({
        where: {
          id_group: parseInt(data.id_group),
        },
      });

      if (!groupFound) {
        return NextResponse.json(
          {
            message: "Group not found",
          },
          {
            status: 400,
          }
        );
      }

      idGroup = data.id_group;
    }

    const newRegister = await db.users.create({
      data: {
        fullname: data.fullname,
        email: data.email,
        password: hashedPassword,
        id_group: idGroup,
        isprofessor: data.isprofessor,
        school: data.school,
      },
    });

    // Si el usuario es un profesor, crear un nuevo grupo asociado a él
    let createdGroup = null;
    if (data.isprofessor) {
      createdGroup = await db.group.create({
        data: {
          group_name: `Group for ${data.fullname}`,
          groupPhoto: '', // Puedes personalizar esto según sea necesario
          id_professor: newRegister.id_user,
          active: true,
        },
      });

      // Actualizar el registro del profesor con el ID del grupo creado
      await db.users.update({
        where: { id_user: newRegister.id_user },
        data: { id_group: createdGroup.id_group.toString() },
      });
    }

    const { password: _, ...register } = newRegister;

    return NextResponse.json({ ...register, group: createdGroup });
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
