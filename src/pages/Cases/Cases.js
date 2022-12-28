import { useState, useEffect } from 'react'
// import {headers} from '../../../config/apiHeaders'

export default function Case () {
  const [cases, setCases] = useState([])

  const getCases = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/case?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
        }
      })
      const data = await response.json()
      setCases(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCases()
  }, [])

  return(
    <>
      <h1>Cases</h1>
      {
        cases ? (
          <ul>
            {
              cases.map((item) => {
                return(
                <li>
                  {item.brand}
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
    </>
  )
}