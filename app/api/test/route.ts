import checkAuth from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const headerList = headers();
  const token = headerList.get("x-microdev-admin-token");

  const isAuth = checkAuth(token);

  if (isAuth) {
    return NextResponse.json({ message: isAuth }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Not an admin" }, { status: 401 });
  }
}
