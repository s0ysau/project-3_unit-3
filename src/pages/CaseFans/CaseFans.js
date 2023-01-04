import { useState, useEffect } from 'react'
import PrevNextBtn from '../../components/PrevNextBtn'

export default function CaseFans (props) {
  const [caseFans, setCaseFans] = useState([])


  const getCaseFans = async (limit, offset) => {
    try {
      const response = await fetch(`${props.url}/case_fan?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
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
                <li key={caseFan.id}>
                  <img src={caseFan.img} alt={caseFan.title} />
                  <h3>{caseFan.brand} - {caseFan.model} ({caseFan.rpm})</h3>
                  <p>${caseFan.price}</p>
                  <button>Add to Cart</button>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      } 
      <PrevNextBtn getProduct={getCaseFans}/>
    </>
  )
}
