
export const headers = {
  base_url: "https://computer-components-api.p.rapidapi.com",
  host: "computer-components-api.p.rapidapi.com",
  apiKey: "4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1"
}

const base_url = "https://computer-components-api.p.rapidapi.com"
const host = "computer-components-api.p.rapidapi.com"
const apiKey = "4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1"


export async function sendProductRequire (data) {
  const {
    category, limit = 10, offset = 0, payload = null, method = 'GET'
  } = data
  const options = { method }
  if (payload){
    options.headers = {
      'Content-Type': 'application/json',
      "X-RapidAPI-Key": `${apiKey}`,
      "X-RapidAPI-Host" : `${host}`
    }
    options.body = JSON.stringify(payload)
}
const response = await fetch(`${base_url}/${category}?limit=${limit}&offset=${offset}`, options)
if (response.ok) return response.json()
throw new Error('Bad Request')
}


