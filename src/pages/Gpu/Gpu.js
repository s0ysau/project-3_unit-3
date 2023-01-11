import { useState, useEffect } from 'react'
import ProductDisplay from '../ProductsDisplay/ProductsDisplay'

export default function Gpu (props) {
  const [gpus, setGpus] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const getGpus = async () => {
    try {
      const response = await fetch(`${props.url}/gpu?limit=${limit}&offset=${offset}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': `${props.apiKey}`,
          'X-RapidAPI-Host': `${props.host}`
        }
      })
      const data = await response.json()
      setGpus(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getGpus({ limit, offset })
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
      <h1>GPU</h1>
      {
        gpus
          ? (
            <ul className='product-listing-container'>
              {
              gpus.map((gpu) => {
                return (
                  <ProductDisplay props={gpu} />
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
