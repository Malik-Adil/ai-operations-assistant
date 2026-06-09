import { NextResponse } from "next/server";

/**
 * Placeholder endpoint for workspace creation.
 * Replace with real backend logic when implementing API.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, website, industry, size } = body as Record<string, unknown>;

    if (!companyName || typeof companyName !== "string") {
      return NextResponse.json(
        { message: "companyName is required" },
        { status: 400 }
      );
    }

    // Placeholder: accept and return success
    return NextResponse.json(
      {
        workspaceId: "ws-placeholder",
        companyName: String(companyName),
        website: website ? String(website) : null,
        industry: industry ? String(industry) : null,
        size: size ? String(size) : null,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }
}
