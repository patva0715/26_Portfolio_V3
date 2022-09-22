import useMeasure from 'react-use-measure'
import { useSpring, a, easings, useTransition } from '@react-spring/web'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Animated from '../src/components/Animated'

const Divider = ({ show, delay }) => {
    const [ref, { width: viewWidth }] = useMeasure()
    const { width } = useSpring({
        from: { width: show ? 0 : viewWidth },
        to: { width: show ? viewWidth : 0 },
        delay: 0,
        config: { duration: show ? 400 : 220, easing: easings.easeInOutSine }
    })
    return (
        <div ref={ref}>
            <a.div className='my-3 h-[1px] bg-amber dark:bg-amber bg-opacity-100 dark:bg-opacity-20' style={{ width }} />
        </div>
    )
}
const About = () => {
    const { asPath: location } = useRouter()
    const onPageActive = useMemo(() => {
        return location === '/about'
    }, [location])
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="About page for Patrick Valera" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='font-thin py-[20vh] flex flex-col justify-center'>
                {/* ABOUT DIVIDER */}
                <Animated show={onPageActive}>
                    <h1>About</h1>
                </Animated>
                <Divider show={onPageActive} delay={0} />
                <Animated show={onPageActive}>
                    <p className='sm:text-sm md:text-3xl lg:text-4xl font-[200]'>Full stack developer proficient in frontend technologies</p>
                </Animated>
                <Animated show={onPageActive}>
                    <p className='sm:text-sm md:text-3xl lg:text-4xl font-[200]'>but also skilled in server develpment and deployment.</p>
                </Animated>
                <Animated show={onPageActive}>
                    <p className='sm:text-sm md:text-3xl lg:text-4xl font-[200]'>I create client-facing products.</p>
                </Animated>
                {/* CONTACT DIVIDER show={show} */}
                <div className='pt-8'>
                    <Animated show={onPageActive}>
                        <h2>CONTACT</h2>
                    </Animated>
                </div>
                <Divider show={onPageActive} delay={120} />
                <div>
                    <div className='flex flex-row gap-8'>
                        <div>
                            <Animated show={onPageActive}>
                                <h2>Email</h2>
                            </Animated>
                            <Animated show={onPageActive}>
                                <h2>patrickvalera500@gmail.com</h2>
                            </Animated>
                        </div>
                        <div>
                            <Animated show={onPageActive}>
                                <h2>Social</h2>
                            </Animated>
                            <Animated show={onPageActive}>
                                <h2>Instagram</h2>
                            </Animated>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About