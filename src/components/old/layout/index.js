import React from 'react'
import Logo from './Logo'
import Main from './Main'
import Navigation from './Navigation'
const Layout = ({ children, changeTheme }) => {
  return (
    <div id='main' className='dark'>
      <div className=' text-gray dark:text-amber bg-light dark:bg-dark duration-200 text-md md:text-xs lg:text-[18px]'>
        {/* <Logo /> */}
        <Navigation />
        <Main>
          {children}
        </Main>
      </div>
    </div>
  )
}

export default Layout