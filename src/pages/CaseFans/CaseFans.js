import { useState, useEffect } from 'react'
import ProductDisplay from '../ProductsDisplay/ProductsDisplay'

export default function CaseFans (props) {
  const [caseFans, setCaseFans] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  const getCaseFans = async () => {
    try {
      const response = await fetch(`${props.url}/case_fan?limit=${limit}&offset=${offset}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': `${props.apiKey}`,
          'X-RapidAPI-Host': `${props.host}`
        }
      })
      const data = await response.json()
      setCaseFans(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getCaseFans({ limit, offset })
  }, [limit, offset])

  const handleNext = async () => {
    setOffset((prev) => (prev += limit))
  }
  const handlePrevious = async () => {
    if (offset === 0) {

    } else {
      setOffset((prev) => (prev -= limit))
    }
  }

  return (
    <div className='product-body'>
      <h1>Case Fans</h1>
      {
        caseFans
          ? (
            <ul className='product-listing-container'>
              {
              caseFans.map((caseFan) => {
                return (
                  <ProductDisplay props={caseFan} />
                )
              })
            }
            </ul>
            )
          : <h1>Nothing to Show</h1>
      }
      <div className='button-btns'>
        <button onClick={handlePrevious} className='prev'>Previous</button>
        <button onClick={handleNext} className='next'>Next</button>
      </div>
    </div>
  )
}
