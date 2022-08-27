import { mande } from "mande";
const BASE_URL = import.meta.env.VITE_SERVICES_BASEURL;

const orders = mande(BASE_URL + "/api/orders");

export function submitOrder(order) {
  orders.post(order);
}
