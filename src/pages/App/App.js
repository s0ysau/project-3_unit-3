import { useState, useEffect } from 'react'
import AuthPage from '../Auth/AuthPage'
import NavBar from '../../components/NavBar/NavBar'
import MainPage from '../MainPage/MainPage'

export default function App () {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)

  return (
    <main className='App'>
      <>
        {user
          ? <>
            <NavBar user={user} setUser={setUser} />
            <MainPage />
            </>
          : <AuthPage setUser={setUser} />}

      </>
    </main>
  )
}
