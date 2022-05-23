import React, { useState } from 'react'

const LoggedIn = () => {
const  [loggedIn, setLoggedIn] = useState(false)
const handleLoggedIn = ()=>{
     setLoggedIn(true)
}
const handleLoggedOut =()=>{
     setLoggedIn(false)

  return (
    <div>
         <button onClick={handleLoggedIn}>LoggedIN</button>
         <button onClick={handleLoggedOut}>LoggedOut</button>
<h4>{loggedIn ?  "User is LoggedIn"  : " Logged Out"}</h4>
    </div>
  )
}
}
export default LoggedIn