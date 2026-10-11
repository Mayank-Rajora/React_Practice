import React from 'react'
import Profile_card from './Profile_card'

const Home = () => {
  return (
    <div className='home'>
        <Profile_card name = "Mayank" bio = "Learning React" image = "book1.jpg"/>
        <Profile_card name = "Aman" bio = "not learning React" image = "book2.jpg"/>
        <Profile_card name = "Rahul" bio="dont know him" image = "book3.jpg"/>
      
    </div>
  )
}

export default Home
