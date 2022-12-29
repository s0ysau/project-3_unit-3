import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function Storage () {
  const [storage, setStorage] = useState([])

  const getStorage = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/storage?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
        }
      })
      const data = await response.json()
      setStorage(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getStorage()
  }, [])

  return(
    <>
      <h1>Storage</h1>
      <MultipleDisplay products={storage} />
    </>
  )
}

/*
      {
        storage ? (
          <ul>
            {
              storage.map((item) => {
                return(
                <li>
                  <img src={item.img} alt={item.title} />
                  <h1>{item.title}</h1>
                  <p>${item.price}</p>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
*/