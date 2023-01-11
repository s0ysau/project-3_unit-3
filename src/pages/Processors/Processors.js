import { useState, useEffect } from 'react'
import ProductDisplay from '../ProductsDisplay/ProductsDisplay'

export default function Processor (props) {
  const [processors, setProcessors] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const getProcessors = async () => {
    try {
      const response = await fetch(`${props.url}/processor?limit=${limit}&offset=${offset}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': `${props.apiKey}`,
          'X-RapidAPI-Host': `${props.host}`
        }
      })
      const data = await response.json()
      setProcessors(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getProcessors({ limit, offset })
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
      <h1>Processors</h1>
      {
        processors
          ? (
            <ul className='product-listing-container'>
              {
              processors.map((processor) => {
                return (
                  <ProductDisplay props={processor} />
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
