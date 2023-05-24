"use client"
import useMeasure from 'react-use-measure'
import { useSpring, a, easings, useTransition } from '@react-spring/web'
import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Animated from '../../components/shared/Animated'
import Text from '../../components/shared/Text'

const Divider = ({ show, delay }) => {
    const [ref, { width: viewWidth }] = useMeasure()
    const { width } = useSpring({
        from: { width: 0 },
        to: { width: viewWidth },
        delay: show ? delay : 0,
        config: { duration: show ? 240 : 220, easing: easings.easeInOutSine }
    })
    return (
        <div ref={ref}>
            <a.div className='my-2 h-[1px] duration-200 bg-gray dark:bg-amber bg-opacity-40 dark:bg-opacity-40' style={{ width }} />
        </div>
    )
}
const Header = ({ title }) => {
    return (
        <h2 className='text-lg lg:text-max3 font-bold pb-2'>
            {title}
        </h2>
    )
}
const About = () => {
    const { asPath: location } = useRouter()
    const onPageActive = true
    const router = useRouter()
    const handleNavigate = (target) => router.push(target)
    return (
        <>
            <div className='font-thin border-0 overflow-hidden border-red-500 pt-vw px-vw h-full'>
                <div className='fixed top-4 left-4'>
                    <Animated show={true}>
                        <ul className='flex gap-2'>
                            <li><button onClick={() => handleNavigate('/')}>Back</button></li>
                        </ul>
                    </Animated>
                </div>
                {/* DIVIDER */}
                <div className='flex flex-wrap mb-6'>
                    <article className='hidden lg:block flex-1 basis-[300px] pt-[15vw] lg:pt-[10vw] border-r-[0px] border-gray dark:border-amber border-opacity-30'>
                        <Animated show={onPageActive}>
                            <Header title='Summary' />
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Highly skilled and detail-oriented software engineer with 4 years of programming experience.</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Capable of designing, developing, and maintaining complex software systems.</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Proficient in a variety of programming languages, including Python, Javascript and C++. </Text>
                        </Animated>
                    </article>
                    <article className='block lg:hidden flex-1 basis-[300px] pt-[15vw] lg:pt-[10vw] border-r-[0px] border-gray dark:border-amber border-opacity-30'>
                        <Animated show={onPageActive}>
                            <Header title='Summary' />
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Highly skilled and detail-oriented software engineer with 4 years of </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>programming experience.Capable of designing, developing, and </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>maintaining complex software systems. Proficient in a variety of </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>programming languages, including Python, Javascript and C++. </Text>
                        </Animated>
                    </article>
                </div>
                {/* DIVIDER */}
                <div className='flex flex-wrap'>
                    <article className='flex-1 mb-4'>
                        <Animated show={onPageActive}>
                            <Header title='Education' />
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Associate Degree in Mathematics
                            </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Associate Degree in Social Studies
                            </Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>
                                Bachelor of Science in Computer Science
                            </Text>
                        </Animated>
                    </article>
                    <article className='flex-1 mb-4'>
                        <Animated show={onPageActive}>
                            <Header title='Work History' />
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Nucamp - Fullstack Developer 4mo</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>Amazon - Warehouse Inventory Control 3yr</Text>
                        </Animated>
                        <Animated show={onPageActive}>
                            <Text>McDonalds - Cook and Trainer 1yr</Text>
                        </Animated>
                    </article>
                    <article className='flex-1 mb-4'>
                        <Animated show={onPageActive}>
                            <Header title='Competitions' />
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
                        <Animated show={onPageActive}>
                            <Text>
                                {"Appwrite Hackathon '22 "}
                            </Text>
                        </Animated>
                    </article>
                </div>

            </div>
        </>
    )

}

export default About