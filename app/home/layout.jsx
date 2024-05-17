import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default layout