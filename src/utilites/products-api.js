import sendProductRequire from "./send-product-request";

const BASE_URL = "https://computer-components-api.p.rapidapi.com"

export function getByCategory(category) {
  return sendProductRequire(`${BASE_URL}/${category}?limit=10&offset=0`)
}