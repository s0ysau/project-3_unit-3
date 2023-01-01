import { logOut } from "../../utilites/users-service"

export default function Logout({user, setUser}) {
  function handleLogOut(){
    logOut()
    setUser(null)
  }
  return(
    <>
      <a href="/logout" onClick={handleLogOut}>Log Out</a>
    </>
  )
}