import React from 'react'
export type ProfileTypeProps = {
     name: string
}

const Profile = ({name} : ProfileTypeProps) => {
  return (
    <div>Private Profile Component Name is {name}</div>
  )
}

export default Profile