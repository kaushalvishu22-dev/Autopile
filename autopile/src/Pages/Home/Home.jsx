import React from 'react'
import Homehero from './Home-hero'
import HomeCategory from './Home-Category'
import HomeFeatures from './Home-Features'
import Homeadv from './Home-adv'
import Hometop from './Home-top'
import Homefoot from './Home-foot'


const Home = () => {
  return (
    <div>
      <Homehero/>
      <HomeCategory/>
      <HomeFeatures/>
     <Hometop/>
     <Homeadv/>
    <Homefoot/>
    </div>
  )
}

export default Home
