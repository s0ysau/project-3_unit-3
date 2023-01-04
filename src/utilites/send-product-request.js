
export const headers = {
  base_url: "https://computer-components-api.p.rapidapi.com",
  host: "computer-components-api.p.rapidapi.com",
  apiKey: "4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1"
}

const base_url = "https://computer-components-api.p.rapidapi.com"
const host = "computer-components-api.p.rapidapi.com"
const apiKey = "4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1"


export default async function sendProductRequire (url, method = "GET", payload = null) {
  const options = { method }
  if (payload)
  options.headers = {
    'Content-Type': 'application/json',
    "X-RapidAPI-Key": `${apiKey}`,
    "X-RapidAPI-Host" : `${host}`
  }
  options.body = JSON.stringify(payload)
}
