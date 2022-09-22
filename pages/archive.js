import Head from 'next/head'
import React, { useMemo, useState } from 'react'
import { useTransition, animated, useTrail, a, easings, useSpring } from 'react-spring'
import useMeasure from 'react-use-measure'
import Animated from '../src/components/Animated'
import profile from '../public/profile.json'
import { FiArrowUpRight } from "react-icons/fi";
import { useRouter } from 'next/router'


const Archive = () => {
  const {asPath:location} = useRouter()
  const onActive = useMemo(()=>{
    return location === '/archive'
  },[location])
  const [ref, { width: viewWidth, height: viewHeight }] = useMeasure()

  const trail = useTrail(profile.projects.length, {
    delay: 50,
    config: { mass: .9, tension: 8000, friction: 550 },
    width: location === '/archive' ? viewWidth : 0,
    from: { width: location === '/archive' ? 0 : viewWidth, },
  })
  const { y } = useSpring({
    from: { y: location === '/archive' ? viewHeight : 0 },
    to: { y: location === '/archive' ? 0 : viewHeight },
    delay: 50,
    config: { duration: 450, easing: easings.easeInOutSine }
  })
  return (
    <>
      <Head>
        <title>Archive</title>
        <meta name="description" content="Project archive for Patrick's portfolio." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='pt-4 lg:pt-[20vh] h-full '>
        <div className='hidden lg:block'>
          <Animated show={onActive}>
            <h2 className='md:text-3xl font-[300] '>Archive</h2>
          </Animated>
        </div>
        <div className='py-3'>
          <Animated show={onActive}>
            <div className='flex text-sm font-normal'>
              <h2 className='flex-0 basis-[17%] pl-2'>ID</h2>
              <h2 className='flex-1'>TITLE</h2>
              <h2 className='flex-1 hidden md:block'>TECH</h2>
              <h2 className='flex-1 hidden md:block'>CATEGORY</h2>
            </div>
          </Animated>
        </div>

        {trail.map(({ width, ...style }, index) => {
          const { id, title, description, stack, link, date } = profile.projects[index]
          return (
            <div key={index}>
              <a.div className='min-h-[1px] bg-gray dark:bg-amber opacity-100 ' style={{ width }}></a.div>
              <div className='cursor-pointer py-3 sm:py-4 md:py-5 duration-200'>
                <Animated show={onActive}>
                  <div ref={ref} className='flex flex-row w-full text-xs font-[300]' >
                    <div className='flex-0 basis-[17%] pl-2 '>
                      {index}
                    </div>
                    <div className='flex-1 '>
                      {title.toUpperCase()}
                    </div>
                    <div className='flex-1 hidden md:block'>
                      {`${stack[0].toUpperCase()}, ${stack[1] || ''.toUpperCase()}`}
                    </div>
                    <div className='flex-1 hidden md:block'>
                      E-COMMERCE
                    </div>
                    <span className='text-md'>
                      <FiArrowUpRight/>
                    </span>
                  </div>
                </Animated>
              </div>
            </div>
          )
        })}
        {trail.map(({ width, ...style }, index) => {
          const { id, title, description, stack, link, date } = profile.projects[index]
          return (
            <div key={index}>
              <a.div className='min-h-[1px] bg-gray dark:bg-amber opacity-100 ' style={{ width }}></a.div>
              <div className='cursor-pointer py-3 sm:py-4 md:py-5 duration-200'>
                <Animated show={onActive}>
                  <div ref={ref} className='flex flex-row w-full text-xs font-[300]' >
                    <div className='flex-0 basis-[17%] pl-2 '>
                      {index}
                    </div>
                    <div className='flex-1 '>
                      {title.toUpperCase()}
                    </div>
                    <div className='flex-1 hidden md:block'>
                      {`${stack[0].toUpperCase()}, ${stack[1] || ''.toUpperCase()}`}
                    </div>
                    <div className='flex-1 hidden md:block'>
                      E-COMMERCE
                    </div>
                    <span className='text-md'>
                      <FiArrowUpRight/>
                    </span>
                  </div>
                </Animated>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Archive
