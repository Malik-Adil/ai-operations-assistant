import type { Membership } from "@prisma/client";
import { prisma } from "../client";

export type CreateMembershipData = {
  userId: string;
  organizationId: string;
  role?: string;
};

export async function createMembership(
  data: CreateMembershipData
): Promise<Membership> {
  return prisma.membership.create({ data });
}

export async function getMembershipsByUser(
  userId: string
): Promise<Membership[]> {
  return prisma.membership.findMany({ where: { userId } });
}
