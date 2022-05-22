import axios from "axios";

const apiUrl = "http://localhost:3006/test";

export function testFetch() {
  return axios.get(apiUrl);
}
