import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import Animated from '../shared/Animated'
import Logo from './Logo'
import { MdNightsStay } from 'react-icons/md'

const Navigation = () => {
  const changeTheme = () => {
    const element = document.getElementById('main')
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
      <div className='flex flex-row fixed top-vw right-[unset] left-vw md:right-8 gap-[3vw] w-min font-[400] text-md z-50'>
        {/* <Logo /> */}
        <NavTab href='/' title='PV_' />
        <NavTab href='/about' title='BIO' />
        <NavTab href='/archive' title='ARCHIVE' />
      </div>
      <div className='flex flex-row fixed top-vw right-vw gap-4 font-[400] text-md z-50'>
        {/* <Animated show={onPageActive}>
          <Link href='/Resume.pdf' className='opacity-0'>RESUME</Link>
        </Animated> */}
        <Link href='/Resume.pdf' className='opacity-0'>RESUME / CV</Link>

        <button onClick={changeTheme}>
          <MdNightsStay size='22px' />
        </button>
      </div>
    </>

  )
}

const NavTab = ({ href, title }) => {
  const { asPath: location } = useRouter()
  const isActive = useMemo(() => location == href, [location])
  return (
    <div style={{ color: isActive ? '#EA580B' : 'unset' }}>
      <Link href={href}>
        <button className='hover:text-orange-600 font-semibold'>{title}</button>
      </Link>
    </div>
  )
}

export default Navigation