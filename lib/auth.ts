const ADMIN_TOKEN = process.env.ADMIN_TOKEN;

export default function checkAuth(value: string | null) {
  if (value === ADMIN_TOKEN) {
    return true;
  }

  return false;
}
