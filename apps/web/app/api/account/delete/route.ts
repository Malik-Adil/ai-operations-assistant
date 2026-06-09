import { NextResponse } from "next/server";

/**
 * Placeholder endpoint for account deletion.
 * Replace with real session invalidation and data deletion when backend is implemented.
 */
export async function DELETE() {
  // TODO: Invalidate session, delete user and workspace data
  return NextResponse.json({ success: true }, { status: 200 });
}
