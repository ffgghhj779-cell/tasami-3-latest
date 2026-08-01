import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ user: null });
  }
  return NextResponse.json({
    user: {
      id: session.id,
      name: session.name,
      phone: session.phone,
      email: session.email,
      role: session.role,
      customerId: session.customerId,
    },
  });
}
