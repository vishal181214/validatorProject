import React from 'react'
import Contact from './Contact'
import DivImage from './DivImage'
import Started from './Started'
import Techteam from './Techteam'
import WhoWeAre from './WhoWeAre'

function Home() {
  return (
    <div>
      <DivImage/>
      <WhoWeAre/>
      <Started/>
      <Techteam/>
      <Contact/>
    </div>
  )
}

export default Home
