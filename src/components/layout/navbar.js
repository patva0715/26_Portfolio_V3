"use client"
import React, { useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className='flex flex-row fixed top-vw right-[unset] left-vw md:right-8 gap-[3vw] w-min font-[400] text-md z-50'>
                {/* <Logo /> */}
                <NavTab href='/' title='PV' />
                <NavTab href='/about' title='BIO' />
                <NavTab href='/archive' title='ARCHIVE' />
            </div>
            <div className='flex flex-row fixed top-vw right-vw gap-4 font-[400] text-md z-50'>
                {/* <Animated show={onPageActive}>
              <Link href='/Resume.pdf' className='opacity-0'>RESUME</Link>
            </Animated> */}
                <Link href='/Resume.pdf' className='opacity-0'>RESUME</Link>
                {/* <NavTab href='/Resume.pdf' title='RESUME' /> */}

                {/* <button onClick={changeTheme}>
                    <MdNightsStay size='22px' />
                </button> */}
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

export default Navbar