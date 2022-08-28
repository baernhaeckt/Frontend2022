import { mande, defaults } from "mande";
const BASE_URL = import.meta.env.VITE_SERVICES_BASEURL;
const ESTIMATION_BASE_URL = import.meta.env.VITE_SERVICES_ESTIMATION_BASEURL;
const ESTIMATION_TOKEN = import.meta.env.VITE_SERVICES_ESTIMATION_TOKEN;
const ESTIMATION_WEBHOOKURL = import.meta.env.VITE_SERVICES_ESTIMATION_WEBHOOKURL;

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

export async function uploadMeal(mealFile, userId) {
  const formData = new FormData()

  formData.append("image", mealFile);

  await fetch(`${ESTIMATION_BASE_URL}/api/v1/estimation/?user_id=${userId}&token=${ESTIMATION_TOKEN}&webhook_url=${ESTIMATION_WEBHOOKURL}`, {
    method: "POST",
    body: formData,
  })
}
