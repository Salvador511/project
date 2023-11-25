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
          const professorFound = await db.professors.findUnique({
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
            id: professorFound.id_professor,
            name: professorFound.fullname,
            email: professorFound.email,
            isprofessor: true,
          };
        } else {
          // Check for student credentials
          const studentFound = await db.students.findUnique({
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
            id: studentFound.id_student,
            name: studentFound.fullname,
            email: studentFound.email,
            isprofessor: false
          };
        }
       
        return user
      },
    }),
  ],
  callbacks: {

  async jwt({token,user}){
    if(user){
      token.id = user.id
      token.isprofessor = user.isprofessor
    }
    return token
  },
  async session({session,token}) {
      session.user.id = token.id
      session.user.isprofessor = token.isprofessor
      return session 
  }
  },

  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
