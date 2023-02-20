import Head from 'next/head'
import React, { useMemo, useState } from 'react'
import { useTransition, animated, useTrail, a, easings, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import Animated from '../src/components/shared/Animated'
import profile from '../public/profile.json'
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from 'next/router'
import Text from '../src/components/shared/Text'


const Archive = () => {
  const { asPath: location } = useRouter()
  const onActive = useMemo(() => {
    return location === '/archive'
  }, [location])
  const [ref, { width: viewWidth }] = useMeasure()

  const trail = useTrail(profile.projects.length, {
    delay: 0,
    config: { mass: .9, tension: 12000, friction: 550 },
    to: { width: location === '/archive' ? viewWidth : 0, },
    from: { width: location === '/archive' ? 0 : viewWidth, },
  })
  return (
    <>
      <Head>
        <title>Archive</title>
        <meta name="description" content="Project archive for Patrick's portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='pt-[5rem] px-vw lg:pt-[20vh] h-full '>
        <div className='hidden lg:block my-[1vw]'>
          <Animated show={onActive}>
            <h2 className='text-[2vw] font-[300] '>Archive</h2>
          </Animated>
        </div>
        <div className='py-3'>
          <Animated show={onActive}>
            <div className='flex font-normal text-[2.3vw] md:text-[1.8vw] lg:text-[14px]'>
              <Text className='flex-0 basis-[17%] pl-2'></Text>
              <Text className='flex-1'>TITLE</Text>
              <Text className='flex-1 hidden md:block'>TECH</Text>
              <Text className='flex-1 hidden md:block'>CATEGORY</Text>
              <Text className='flex-0 hidden md:block'>LINK</Text>
            </div>
          </Animated>
        </div>

        {trail.map(({ width, ...style }, index) => {
          const { id, title, description, stack, link, date } = profile.projects[index]
          return (
            <>
              <a.div className='h-[1px] bg-gray dark:bg-amber opacity-40' style={{ width }}></a.div>
              {/* DIVIDER ROW */}
              <div key={index} ref={ref} className='cursor-pointer py-[2.5vw] md:py-[2vw] lg:py-[19px] font-[300] text-[2.3vw] md:text-[1.8vw] lg:text-[14px]'>
                <Animated show={onActive}>
                  <div className='flex flex-row w-full items-center ' >
                    <h5 className='flex-0 basis-[17%] pl-2 '>
                      {index}
                    </h5>
                    <h5 className='flex-1 '>
                      {title.toUpperCase()}
                    </h5>
                    <h5 className='flex-1 hidden md:block'>
                      {`${stack[0].toUpperCase()}, ${stack[1] || ''.toUpperCase()}`}
                    </h5>
                    <h5 className='flex-1 hidden md:block'>
                      E-COMMERCE
                    </h5>
                    <span className='text-md lg:text-[19px]'>
                      <FiArrowUpRight />
                    </span>
                  </div>
                </Animated>
              </div>
            </>

          )
        })}
        {trail.map(({ width, ...style }, index) => {
          const { id, title, description, stack, link, date } = profile.projects[index]
          return (
            <>
              <a.div className='h-[1px] bg-gray dark:bg-amber opacity-40' style={{ width }}></a.div>
              {/* DIVIDER ROW */}
              <div key={index} ref={ref} className='cursor-pointer py-[2.5vw] md:py-[2vw] lg:py-[19px] font-[300] text-[2.3vw] md:text-[1.8vw] lg:text-[14px]'>
                <Animated show={onActive}>
                  <div className='flex flex-row w-full items-center ' >
                    <h5 className='flex-0 basis-[17%] pl-2 '>
                      {index}
                    </h5>
                    <h5 className='flex-1 '>
                      {title.toUpperCase()}
                    </h5>
                    <h5 className='flex-1 hidden md:block'>
                      {`${stack[0].toUpperCase()}, ${stack[1] || ''.toUpperCase()}`}
                    </h5>
                    <h5 className='flex-1 hidden md:block'>
                      E-COMMERCE
                    </h5>
                    <span className='text-md lg:text-[19px]'>
                      <FiArrowUpRight />
                    </span>
                  </div>
                </Animated>
              </div>
            </>

          )
        })}
      </div>
    </>
  )
}

export default Archive
