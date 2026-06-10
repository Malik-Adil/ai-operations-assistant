import type { User } from "@prisma/client";
import { prisma } from "../client";

export type CreateUserData = {
  email: string;
  name: string;
  provider: string;
  providerId: string;
  avatar?: string | null;
};

export async function findByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { email } });
}

export async function findByProvider(
  provider: string,
  providerId: string
): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      provider_providerId: { provider, providerId },
    },
  });
}

export async function createUser(data: CreateUserData): Promise<User> {
  return prisma.user.create({ data });
}

export async function getById(id: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}
