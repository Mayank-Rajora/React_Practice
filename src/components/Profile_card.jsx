import React from 'react'

const Profile_card = ({name,bio,image}) => {
  return (
    <div className='card'>
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>{bio}</p>
      
    </div>
  )
}

export default Profile_card
