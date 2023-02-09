import { auth } from "../../lib/firebase/admin";
import { redirect } from "@sveltejs/kit";


export async function load({ cookies }) {
  try {
    const token = cookies.get("token");

    if (!token) {
      throw redirect(307, "/");
    }


    const user = token ? await auth.verifyIdToken(token) : null;
    return {
      uid: user?.uid,
    };
  } catch {
    // The token is set but invalid or expired
    cookies.set("token", "", { maxAge: -1 });
    throw redirect(307, "/");
  }
}
