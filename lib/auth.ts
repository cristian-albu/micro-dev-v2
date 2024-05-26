import { headers } from "next/headers";
import { AUTH_ADMIN_HEADER_NAME } from "./constants";

const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export default function checkAuth() {
  const headerList = headers();
  const token = headerList.get(AUTH_ADMIN_HEADER_NAME);

  if (token === ADMIN_TOKEN) {
    return true;
  }

  return false;
}
