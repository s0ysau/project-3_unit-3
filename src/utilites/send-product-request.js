
export const headers = {
  base_url: 'https://computer-components-api.p.rapidapi.com',
  host: 'computer-components-api.p.rapidapi.com',
  apiKey: '1de4db4636msh02af1e6b0ac0a6bp19b9f7jsn4e95e4442317'
}

const base_url = 'https://computer-components-api.p.rapidapi.com'
const host = 'computer-components-api.p.rapidapi.com'
const apiKey = '1de4db4636msh02af1e6b0ac0a6bp19b9f7jsn4e95e4442317'

export async function sendProductRequire (data) {
  const {
    category, limit, offset, payload = null, method = 'GET'
  } = data
  const options = { method }
  if (payload) {
    options.headers = {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': `${apiKey}`,
      'X-RapidAPI-Host': `${host}`
    }
    options.body = JSON.stringify(payload)
  }
  const response = await fetch(`${base_url}/${category}?limit=${limit}&offset=${offset}`, options)
  if (response.ok) return response.json()
  throw new Error('Bad Request')
}
