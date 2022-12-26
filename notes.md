  const pubApiKey = "034cbe58ccb5aa914a74f72d4f7b0d5e"
  const pvtApiKey = "9e7c4f83990a2ac0270789482cb8863b62346e78"
  const ts = new Date().getTime()

  const message = ts+pvtApiKey+pubApiKey
  const comb = md5(message)
  
  const [errorMessage, setErrorMessage] = useState("")

  const fetchState = async (searchTerm) => {
    try {
      const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${searchTerm}&ts=${ts}&apikey=${pubApiKey}&hash=${comb}`)
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])