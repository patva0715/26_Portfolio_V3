import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import Animated from '../shared/Animated'
import Logo from './Logo'
import { MdNightsStay } from 'react-icons/md'
const Navigation = () => {
  const changeTheme = () => {
    const element = document.getElementById('__next')
    let cur = element.classList.value
    if (cur === 'dark') element.classList.value = 'light'
    else element.classList.value = 'dark'
  }
  const { asPath: location } = useRouter()
  const onPageActive = useMemo(() => {
    return location === '/'
  }, [location])
  return (
    <>
      <div className='flex flex-row fixed top-vw right-[unset] left-vw md:right-8 gap-[3vw] font-[400] text-md'>
        <Logo />
        <NavTab href='/about' title='BIO'/>
        <NavTab href='/archive' title='ARCHIVE'/>
      </div>
      <div className='flex flex-row fixed top-vw right-vw gap-3 font-[400] text-md'>
        <Animated show={onPageActive}>
          <Link href='/about' className='opacity-0'>CONTACT</Link>
        </Animated>
        <Animated show={onPageActive}>
          <button onClick={changeTheme}>
            <MdNightsStay size='20px' />
          </button>
        </Animated>
      </div>
      {/* <div className='fixed bottom-8 right-8 md:bottom-[unset] md:top-12'>
      </div> */}
    </>

  )
}

const NavTab = ({href, title}) => {
  return (
    <Link href={`/${href}`}>
      <span className='hover:text-orange-600 cursor-pointer'>{title}</span>
    </Link>
  )
}

export default Navigation