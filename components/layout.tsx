import React, { ReactNode } from 'react'

import Header from './header'
import Footer from './footer'

interface LayoutProps {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between font-content antialiased" id="page">
      <Header />
      <main className="mb-auto relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
