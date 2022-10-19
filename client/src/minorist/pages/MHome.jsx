import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carousel/Carousel'

const MHome = () => {
  return (
    <div>
      <Header section="minorist"/>
      <Navbar section="minorist"/>
      <Carousel section="minorist"/>
      <Footer section="minorist"/>
    </div>
  )
}

export default MHome