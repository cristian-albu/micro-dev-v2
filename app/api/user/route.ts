import pool from "@/db/client";
import checkAuth from "@/lib/auth";
import { NextResponse } from "next/server";
import { PoolClient } from "pg";

export async function GET() {
  const isAuth = checkAuth();

  if (!isAuth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let client: PoolClient | undefined;

  try {
    client = await pool.connect();

    const result = await client.query(`SELECT * FROM users;`);

    if (result.rows.length < 1) {
      return NextResponse.json({ message: `No users found` }, { status: 404 });
    }

    return NextResponse.json(result.rows, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `An error has occured: ${error}` },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}

export async function POST() {}
