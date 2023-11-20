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
        const { isprofessor } = credentials;
        let user;
        if (isprofessor == 'true') {
          // Check for professor credentials
          const professorFound = await db.professor.findUnique({
            where: {
              email: credentials.email,
            },
          });
      
          if (!professorFound) {
            throw new Error("No professor found");
          }
      
          const matchPassword = await bcrypt.compare(credentials.password, professorFound.password);
      
          if (!matchPassword) {
            throw new Error("Wrong password");
          }
      
          user = {
            image: professorFound.id_professor,
            name: professorFound.name,
            email: professorFound.email,
            isprofessor: true,
          };
        } else {
          // Check for student credentials
          const studentFound = await db.student.findUnique({
            where: {
              email: credentials.email,
            },
          });
      
          if (!studentFound) {
            throw new Error("No student found");
          }
      
          const matchPassword = await bcrypt.compare(credentials.password, studentFound.password);
      
          if (!matchPassword) {
            throw new Error("Wrong password");
          }
      
          user = {
            image: studentFound.id_student,
            name: studentFound.firstname,
            email: studentFound.email,
            isprofessor: false,
          };
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
