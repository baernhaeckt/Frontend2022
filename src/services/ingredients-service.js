import { mande } from "mande";
const BASE_URL = import.meta.env.VITE_SERVICES_BASEURL;

const recommend = mande(BASE_URL + "/api/ingredients");

export function loadAllIngredients() {
  return recommend.get();
}

export function loadIngredientsForDish(dish) {
  return recommend.get();
}
