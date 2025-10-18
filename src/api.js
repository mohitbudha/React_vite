import axios from "axios";

const API = axios.create({
  baseURL: "https://crudcrud.com/api/7fdae23e414a421da734526647316915/students",
});
export default API;