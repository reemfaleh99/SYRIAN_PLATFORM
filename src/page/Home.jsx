import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Courses from '../components/Courses'
import WhyUs from '../components/WhyUs'
import Volunteer from '../components/Volunteer'
import Comments from '../components/Comments'
import News from '../components/News'

const Home = () => {
  return (
    <div >
        <Header/>
        <Courses/>
        <WhyUs/>
        <Volunteer/>
        <Comments/>
        <News/>
    </div>
  )
}

export default Home
