import useMeasure from 'react-use-measure'
import { useSpring, a, easings, useTransition } from '@react-spring/web'
import Head from 'next/head'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Animated from '../src/components/shared/Animated'
import Text from '../src/components/shared/Text'

const Divider = ({ show, delay }) => {
    const [ref, { width: viewWidth }] = useMeasure()
    const { width } = useSpring({
        from: { width: show ? 0 : viewWidth },
        to: { width: show ? viewWidth : 0 },
        delay: show ? delay : 0,
        config: { duration: show ? 240 : 220, easing: easings.easeInOutSine }
    })
    return (
        <div ref={ref}>
            <a.div className='my-2 h-[1px] duration-200 bg-gray dark:bg-amber bg-opacity-40 dark:bg-opacity-40' style={{ width }} />
        </div>
    )
}
const Header = ({ show: onPageActive, title, className, delay }) => {
    return (
        <>
            <Animated className={'pt-8 ' + className} show={onPageActive}>
                <Text className='font-[400] text-orange-600'>{title}</Text>
            </Animated>
            <Divider show={onPageActive} delay={delay || 0} />
        </>
    )
}
const About = () => {
    const { asPath: location } = useRouter()
    const onPageActive = useMemo(() => {
        return location === '/about'
    }, [location])
    return (
        <>
            <div className='font-thin border-2 border-red-500 pt-vw px-vw h-full overflow-scroll'>
                {/* DIVIDER */}
                <div className='flex flex-wrap'>
                    <article className='flex-1 basis-[300px] pt-[15vw] lg:pt-[10vw] border-r-[0px] border-gray dark:border-amber border-opacity-30 pl-[2vw]'>
                        <Animated show={onPageActive}>
                            <h2 className='text-[2.3vw] font-normal'>
                                Summary

                            </h2>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>I am a fullstack developer proficient in frontend technologies</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>but also skilled in server develpment and cloud server deployment.</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>I build solutions to connect user needs to a client's businesses model.  </Text>
                        </Animated>
                    </article>
                    <article className='flex-1 basis-[300px] pt-[25vw] lg:pt-[17vw] pl-[2vw]'>
                        <Animated show={onPageActive}>
                            <h2 className='text-[2.3vw] font-normal'>
                                Education
                            </h2>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Associate's Degree in Mathematics
                            </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Associate's Degree in Social Studies
                            </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Bachelor's of Science in Computer Science
                            </Text>
                        </Animated>
                    </article>
                </div>
                {/* DIVIDER */}
                <div className='flex flex-wrap'>
                    <article className='flex-1 basis-[300px] pt-[15vw] lg:pt-[10vw] border-r-[0px] border-gray dark:border-amber border-opacity-30 pl-[2vw]'>
                        <Animated show={onPageActive}>
                            <h2 className='text-[2.3vw] font-normal'>
                                Work History
                            </h2>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Nucamp - Fullstack Developer 4mo</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Amazon - Warehouse Inventory Control Associate 3yr</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>McDonalds - Senior Cook 1yr</Text>
                        </Animated>
                    </article>
                    <article className='flex-1 basis-[300px] pt-[25vw] lg:pt-[17vw] pl-[2vw]'>
                        <Animated show={onPageActive}>
                            <h2 className='text-[2.3vw] font-normal'>
                                Competitions
                            </h2>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                {"Redis Hackathon '22 - Runnerup ($200)"}
                            </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                {"MongoDB Hackathon '22 - Won ($2.1k)"}
                            </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                {"Hack4Pan '22 - Top 20"}
                            </Text>
                        </Animated>
                    </article>
                </div>
                {/* DIVIDER */}
                {/* <div className='flex flex-wrap'>
                    <article className='flex-1 basis-[300px] pt-[15vw] lg:pt-[10vw] border-r-[0px] border-gray dark:border-amber border-opacity-30 pl-[2vw]'>
                        <Animated show={onPageActive}>
                            <h2 className='text-[2.3vw] font-normal'>
                                Summary

                            </h2>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Full stack developer proficient in frontend technologies</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>but also skilled in server develpment and deployment.</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>I create client-facing products.</Text>
                        </Animated>
                    </article>
                    <article className='flex-1 basis-[300px] pt-[25vw] lg:pt-[17vw] pl-[2vw]'>
                        <Animated show={onPageActive}>
                            <h2 className='text-[2.3vw] font-normal'>
                                Education
                            </h2>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Associate's Degree in Mathematics
                            </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Associate's Degree in Social Studies
                            </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Bachelor's of Science in Computer Science
                            </Text>
                        </Animated>
                    </article>
                </div> */}
            </div>
        </>
    )
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="description" content="About page for Patrick Valera" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='font-thin border-0 pt-vw px-vw h-full'>
                {/* ABOUT DIVIDER */}
                <Header show={onPageActive} className='pt-12' title='ABOUT ME' />
                <div>
                    <Animated show={onPageActive}>
                        <Text>Full stack developer proficient in frontend technologies</Text>
                    </Animated>
                    <Animated show={onPageActive}>
                        <Text>but also skilled in server develpment and deployment.</Text>
                    </Animated>
                    <Animated show={onPageActive}>
                        <Text>I create client-facing products.</Text>
                    </Animated>
                </div>
                {/* EDUCATION DIVIDER */}
                <Header show={onPageActive} title='EDUCATION' delay={120} />
                <div className='pl-2'>
                    <ul>
                        <li>
                            <Animated show={onPageActive}>
                                <Text>Associates of Science - Mathematics</Text>
                            </Animated>
                        </li>
                        <li>
                            <Animated show={onPageActive}>
                                <Text>Associates of Science - Social Behavior</Text>
                            </Animated>
                        </li>
                        <li>
                            <Animated show={onPageActive}>
                                <Text>Bachelors of Science - Computer Science</Text>
                            </Animated>
                        </li>
                    </ul>
                </div>
                {/* EXPERIENCE DIVIDER */}
                <Header show={onPageActive} title='EXPERIENCE' delay={190} />
                <div className='pl-2'>
                    <ul>
                        <li>
                            <Animated show={onPageActive}>
                                <Text>Amazon - Warehouse Inventory Control Associate</Text>
                            </Animated>
                        </li>
                        <li>
                            <Animated show={onPageActive}>
                                <Text>Nucamp - Fullstack Developer</Text>
                            </Animated>
                        </li>
                        <li>
                            <Animated show={onPageActive}>
                                <Text>McDonalds - Cook</Text>
                            </Animated>
                        </li>
                    </ul>
                </div>
                {/* AWARDS DIVIDER */}
                <Header show={onPageActive} title='AWARDS' delay={220} />
                {/* CONTACT DIVIDER */}
                <Header show={onPageActive} title='CONTACT' delay={240} />
                <div className='flex gap-8'>
                    <div>
                        <Animated show={onPageActive}>
                            <Text>EMAIL</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>PATRICKVALERA500@GMAIL.COM</Text>
                        </Animated>
                    </div>
                    <div>
                        <Animated show={onPageActive}>
                            <Text>SOCIAL</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Instagram</Text>
                        </Animated>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About