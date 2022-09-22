import React from 'react'
import Logo from './Logo'
import Main from './Main'
import Navigation from './Navigation'
const Layout = ({ children,changeTheme }) => {
  return (
    <>
      <Logo />
      <Navigation />
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout