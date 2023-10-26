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
  // callbacks: {
  //   async signIn({ user, account }) {
  //     const existingUser = await prisma.user.findUnique({
  //       where: { email: user.email },
  //     });

  //     if (existingUser) {
  //       await prisma.user.update({
  //         where: { id: existingUser.id },
  //         data: {
  //           name: user.name,
  //           image: user.image,
  //           updatedAt: new Date(),
  //           lastLogin: new Date(),
  //         },
  //       });
  //     } else {
  //       await prisma.user.create({
  //         data: {
  //           name: user.name,
  //           email: user.email,
  //           image: user.image,
  //           lastLogin: new Date(),
  //         },
  //       });
  //     }

  //     return user;
  //   },
  //   async signOut({ user }) {
  //     const existingUser = await prisma.user.findUnique({
  //       where: { email: user.email },
  //     });

  //     if (existingUser && existingUser.lastLogout === null) {
  //       await prisma.user.update({
  //         where: { id: existingUser.id, lastLogin: null },
  //         data: {
  //           lastLogout: new Date(), // Aktualizuj lastLogout podczas wylogowywania
  //         },
  //       });
  //     }

  //     return null;
  //   },
  // },
});

export { handler as GET, handler as POST };

// https://next-auth.js.org/configuration/callbacks
