import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  const changeTheme = () =>{
    const element = document.getElementById('__next')
    let cur = element.classList.value
    if(cur==='dark') element.classList.value='light'
    else element.classList.value='dark'
  }
  return (
    <>
        <div className='flex flex-row fixed top-1 right-1 border-2 border-white'>
        <Link href='/about'>ABOUT</Link>
        <Link href='/archive'>ARCHIVE</Link>
    </div>
    <div className='fixed bottom-0'>
      <button onClick={changeTheme}>THEME</button>
    </div>
    </>

  )
}

export default Navigation