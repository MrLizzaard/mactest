import axios from "axios";

export function dbTest() {
  return axios.get(`http://localhost:3006`);
}
