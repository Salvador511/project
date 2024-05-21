import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from '@/libs/db';
import bcrypt from 'bcrypt';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;
        let user;

        const userFound = await db.users.findUnique({
          where: { email },
        });

        if (!userFound) {
          throw new Error("No user found");
        }

        const matchPassword = await bcrypt.compare(password, userFound.password);

        if (!matchPassword) {
          throw new Error("Wrong password");
        }

        user = {
          id: userFound.id_user,
          name: userFound.fullname,
          email: userFound.email,
          isprofessor: userFound.isprofessor,
          id_group: userFound.id_group ? parseInt(userFound.id_group) : null,
        };

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isprofessor = user.isprofessor;
        token.id_group = user.id_group;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.isprofessor = token.isprofessor;
      session.user.id_group = token.id_group;
      return session;
    }
  },
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
