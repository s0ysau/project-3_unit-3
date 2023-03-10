import { useState } from 'react'
import { Link } from 'react-router-dom'
import * as userService from '../../utilites/users-service'

export default function LoginForm ({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await userService.login(credentials)
      setUser(user)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <div className='form-container'>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <label>Email</label>
          <input type='email' name='email' value={credentials.email} onChange={handleChange} required />
          <label>Password</label>
          <input type='password' name='password' value={credentials.password} onChange={handleChange} required />
          {/* <nav>
            <p>Forgot Password?</p>
          </nav> */}
          <button type='submit'>LOG IN</button>
        </form>
      </div>
      <h1 className='error-message'>&nbsp;{error}</h1>
      <section>
        <h3>For Demo Run, Use the following credentials</h3>
        <p>Email: test@mail.com</p>
        <p>Password: 1234</p>
        <h3>NOTE: As of March 2023, there is a hard limit of 100 request/day on API request.</h3>
      </section>
    </div>
  )
}
