import { mande } from "mande";
const BASE_URL = import.meta.env.VITE_SERVICES_BASEURL;

const users = mande(BASE_URL + "/api/users");

export function registerUser(email) {
  return users.post("register", {
    email: email,
    password: 'nonsense'
  });
}

export function login(email, password) {
  return users.post("login", {
    email: email,
    password: password,
  });
}
