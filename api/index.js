import axios from "axios";
import products from "./routers/Products";
const api = axios.create({
  baseURL: "http://localhost:8081/",
  timeout: 100000,
});

class Api {
  constructor(api) {
    this.products = new products(api);
  }
}
export default new Api(api);
