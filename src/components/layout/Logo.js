import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href='/'>
            <div className='fixed top-1 left-1'>Patrick V</div>
        </Link>
    )
}

export default Logo