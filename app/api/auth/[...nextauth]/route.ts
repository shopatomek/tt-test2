import { PrismaClient } from "@prisma/client";

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, email, profile }) {
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email },
      });
      if (existingUser) {
        await prisma.user.update({
          where: { id: existingUser.id },
          data: {
            name: user.name,
            image: user.image,
            updatedAt: new Date(),
          },
        });
      } else {
        await prisma.user.create({
          data: {
            name: user.name,
            email: user.email,
            image: user.image,
            updatedAt: new Date(),
          },
        });
      }

      return user;
    },
  },
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// https://next-auth.js.org/configuration/callbacks
