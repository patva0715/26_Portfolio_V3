import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import Animated from '../shared/Animated'

const Logo = () => {
    const { asPath: location } = useRouter()
    const onPageActive = useMemo(() => {
        return location !== '/'
    }, [location])
    return (
        <div className='fixed top-1 left-1 cursor-pointer'>
            <Animated show={onPageActive} fromSide={false}>
                <Link href='/'>
                    <h1>Patrick V</h1>
                </Link>
            </Animated>

        </div>



    )
}

export default Logo