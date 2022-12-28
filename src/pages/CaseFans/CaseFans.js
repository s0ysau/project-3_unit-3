import { useState, useEffect } from 'react'
// import {headers} from '../../../config/apiHeaders'

export default function CaseFans () {
  const [caseFans, setCaseFans] = useState([])

  const getCaseFans = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/case_fan?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
        }
      })
      const data = await response.json()
      setCaseFans(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCaseFans()
  }, [])

  return(
    <>
      <h1>Case Fans</h1>
      {
        caseFans ? (
          <ul>
            {
              caseFans.map((caseFan) => {
                return(
                <li>
                  {caseFan.brand}
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
    </>
  )
}