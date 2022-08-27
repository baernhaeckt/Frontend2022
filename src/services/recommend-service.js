import { mande } from "mande";
const BASE_URL = import.meta.env.VITE_SERVICES_BASEURL;

const recommend = mande(BASE_URL + "/api/recommend");

export function recommendMenu(except = []) {
  return recommend.post({ except: except });
}
