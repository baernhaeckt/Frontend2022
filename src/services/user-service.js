import { mande } from "mande";
const BASE_URL = import.meta.env.VITE_SERVICES_BASEURL;

const users = mande(BASE_URL + "/api/users");

export function registerUser(email) {
  return users.post("register", {
    email: email
  });
}

export function loginUser(email, password) {
  return users.post("login", {
    email: email,
    password: password,
  });
}

export async function currentUserProfile() {
  return await users.get("profile");
}
