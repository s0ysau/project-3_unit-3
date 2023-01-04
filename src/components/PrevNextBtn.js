import { useState, useEffect } from 'react'

export default function PrevNextBtn (props) {
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    props.getProduct(props.limit, props.offset)
  }, [limit, offset])

  const handleNext = async () => {
    setOffset((prev) => (prev += limit));
  };
  const handlePrevious = async () => {
    if (offset === 0){
      return
    } else {
    setOffset((prev) => (prev -= limit));
    }
  };

  return (
    <form onClick={(evt) => {
      evt.preventDefault();
      props.getProduct(limit, offset)
    }}>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </form>
  )
}