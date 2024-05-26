import { headers } from "next/headers";
import { AUTH_ADMIN_HEADER_NAME } from "./constants";

const ROOT_HOST = process.env.ROOT_HOST || "";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "";

export const checkTypes = {
  userFound: "User exists",
  noUserFound: "No user was found",
  error: "Error",
};

export async function checkUser() {
  const reqHeaders = headers();
  const ip = reqHeaders.get("x-forwarded-for") || "";

  const encodeIp = encodeURIComponent(ip);

  const res = await fetch(`${ROOT_HOST}/api/user/${encodeIp}`, {
    method: "GET",
    headers: {
      [AUTH_ADMIN_HEADER_NAME]: ADMIN_TOKEN,
    },
  });

  const resJson = await res.json();

  if (res.status === 200) {
    return { message: checkTypes.userFound, user: resJson };
  }

  if (res.status === 404) {
    return { message: checkTypes.noUserFound };
  }

  return { message: checkTypes.error, error: resJson };
}

export async function createUser() {}

export async function handleUser() {}
