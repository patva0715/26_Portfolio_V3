import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import Animated from '../shared/Animated'

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
      <div className='flex flex-row fixed top-8 right-[unset] left-9 md:right-8 gap-3 font-[300] text-md'>
        <Link href='/about' className='opacity-0'>BIO</Link>
        <Link href='/archive' className='opacity-0'>ARCHIVE</Link>
      </div>
      <div className='flex flex-row fixed top-8 right-8 gap-3 font-[300] text-md'>
        <Animated show={onPageActive}>
          <Link href='/about' className='opacity-0'>CONTACT</Link>
        </Animated>
      </div>
      <div className='fixed bottom-0 right-0'>
        <button onClick={changeTheme}>T</button>
      </div>
    </>

  )
}

export default Navigation