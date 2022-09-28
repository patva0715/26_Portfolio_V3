import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  const changeTheme = () => {
    const element = document.getElementById('__next')
    let cur = element.classList.value
    if (cur === 'dark') element.classList.value = 'light'
    else element.classList.value = 'dark'
  }
  return (
    <>
      <div className='flex flex-row fixed top-3 right-3 gap-3 font-[300] text-md'>
        <Link href='/about' className='opacity-0'>ABOUT</Link>
        <Link href='/archive' className='opacity-0'>ARCHIVE</Link>
      </div>
      <div className='fixed bottom-0 right-0'>
        <button onClick={changeTheme}>T</button>
      </div>
    </>

  )
}

export default Navigation