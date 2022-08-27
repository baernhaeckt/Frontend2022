import { mande, defaults } from "mande";
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

export async function uploadMeal(mealFile) {
  const formData = new FormData()
  formData.append("file", mealFile);
  await fetch(`${BASE_URL}/api/tracking/upload`, {
    method: "POST",
    body: formData,
    headers: new Headers({
      'Authorization': defaults.headers.Authorization
    })
  })
}
