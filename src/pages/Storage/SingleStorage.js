
export default function SingleStorage({storage}) {
  console.log(storage)

  
  return (
    <>
      <h1>Single Storage</h1>
      {/* <img src={storage.img} alt={storage.title} /> */}
      {/* <h2>{storage.title}</h2> */}
      <p>{storage.id}</p>
    </>
  )
}