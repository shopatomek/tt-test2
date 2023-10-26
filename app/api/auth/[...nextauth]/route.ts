// import { PrismaClient } from "@prisma/client";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    // @ts-ignore
    async signIn({ user }) {
      return user;
    },
  },
});

export { handler as GET, handler as POST };

// https://next-auth.js.org/configuration/callbacks
