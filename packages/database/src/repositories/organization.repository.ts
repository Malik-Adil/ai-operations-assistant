import type { Organization } from "@prisma/client";
import { prisma } from "../client";

export type CreateOrganizationData = {
  name: string;
  website?: string | null;
  industry?: string | null;
  size?: string | null;
};

export async function createOrganization(
  data: CreateOrganizationData
): Promise<Organization> {
  return prisma.organization.create({ data });
}

export async function getOrganization(
  id: string
): Promise<Organization | null> {
  return prisma.organization.findUnique({ where: { id } });
}
