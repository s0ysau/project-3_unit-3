import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

export default function AuthPage (props) {
  return (
    <main>
      <h1 className='title'>MicroParts</h1>
      <div className='welcome-container'>
        <div className='sign-up-section'>
          <p className='signup-title'>Sign Up</p>
          <SignUpForm setUser={props.setUser} />
        </div>
        <div className='login-section'>
          <p className='login-title'>Already have an Account?</p>
          <LoginForm setUser={props.setUser} />
        </div>
      </div>
    </main>
  )
}
