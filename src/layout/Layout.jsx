import React from 'react'

import Nav from "../components/Nav"
import Routers from '../route/Routes'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Routers/>
      <Footer/>
    </div>
  )
}

export default Layout
