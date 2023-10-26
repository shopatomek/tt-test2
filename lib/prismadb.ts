import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const isDevelopment = process.env.NODE_ENV === "development";

const client =
  globalThis.prisma ||
  new PrismaClient({
    log: isDevelopment ? ["query", "info", "warn"] : [], // Konfiguracja logów Prisma w zależności od trybu
  });

if (isDevelopment) globalThis.prisma = client;

export default client;
