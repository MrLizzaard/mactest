import axios from "axios";

const apiUrl = `${process.env.REACT_APP_API_URL}`;

export function dbTest() {
  return axios.get(apiUrl + `/getdata`);
}
