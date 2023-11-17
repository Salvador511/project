import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db'
import bcrypt from 'bcrypt'

export const  authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        console.log(credentials)

        const studentFound = await db.student.findUnique({
            where: {
                email: credentials.email
            }
        })

        if (!studentFound) throw new Error('No student found')

        console.log(studentFound)

        const matchPassword = await bcrypt.compare(credentials.password, studentFound.password)

        if (!matchPassword) throw new Error('Wrong password')

        return {
            image: studentFound.id_student,
            name: studentFound.firstname,
            email: studentFound.email,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
