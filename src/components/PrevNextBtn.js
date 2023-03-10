import { useState, useEffect } from 'react'

export default function PrevNextBtn (props) {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    props.getProduct({ limit, offset })
  }, [limit, offset])

  const handleNext = () => {
    setOffset((prev) => (prev += limit))
  }
  const handlePrevious = () => {
    if (offset === 0) {

    } else {
      setOffset((prev) => (prev -= limit))
    }
  }

  return (
    <form onClick={(evt) => {
      evt.preventDefault()
      props.getProduct(offset)
    }}
    >
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </form>
  )
}
