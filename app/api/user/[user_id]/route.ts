import pool from "@/db/client";
import checkAuth from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";
import { PoolClient } from "pg";

export async function GET(
  _req: NextRequest,
  { params }: { params: { user_id: string } }
) {
  const { user_id } = params;

  const id = decodeURIComponent(user_id);

  const isAuth = checkAuth();

  if (!isAuth) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  let client: PoolClient | undefined;

  try {
    client = await pool.connect();

    const result = await client.query(`SELECT * FROM users WHERE user_id=$1;`, [
      id,
    ]);

    if (result.rows.length < 1) {
      return NextResponse.json(
        { message: `User with id ${id} does not exist` },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0], { status: 200 });
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
