import About from '@/components/shared/About'
import Header from '@/components/shared/Header'
import Navbar from '@/components/shared/Navbar'
import Service from '@/components/shared/Service'
import React from 'react'

const HomePage = () => {
  return (
    <div>
       <Header />
       <About />
       <Service />
    </div>
  )
}

export default HomePage