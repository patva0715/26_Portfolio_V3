import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import Animated from '../src/components/shared/Animated'
import Text from '../src/components/shared/Text'
import styles from '../styles/Home.module.css'
import profile from '../public/profile.json'
import Link from 'next/link'
import ProjectCard from '../src/components/home/ProjectCard'
import SkillCard from '../src/components/home/SkillCard'

const heading = 'PATRICK'.split('')
export default function Home() {
  const { asPath: location } = useRouter()
  const onPageActive = useMemo(() => {
    return location === '/'
  }, [location])
  return (
    <>
      <Head>
        <title>Patrick Valera Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='h-full border-0 pointer-events-none relative flex items-center px-vw justify-start md:justify-end'>

        <div className='text-[20vw] lg:text-[11vw] mt-[30vh] lg:mt-0 flex font-bold text-orange-black dark:text-orange-500 opacity-90'>
          {heading.map((letter, indx) => (
            <Animated key={indx} fromSide={true} delay={0} show={onPageActive} molasses>
              <h2 style={{ fontWeight: 500}}>{`${letter}`}</h2>
            </Animated>
          ))}
          {/* <Animated fromSide={true} show={onPageActive} molasses>
            <h1 className='text-orange-600 font-[500]'>_</h1>
          </Animated> */}
        </div>

        <div className='absolute left-vw top-[40%] bottom-[unset] md:top-[unset] md:bottom-vw text-[6vw] md:text-[3.5vw] lg:text-[42px] leading-[6.5vw] md:leading-[3.6vw] lg:leading-[51px] font-bold'>
          <Animated show={onPageActive} delay={0}>
            <h2>Developers</h2>
          </Animated>
          <Animated show={onPageActive} delay={100}>
            <h2>Portfolio</h2>
          </Animated>
          <Animated show={onPageActive} delay={180}>
            <h2>2022</h2>
          </Animated>
        </div>

        <div className='dark:text-orange-200 text-black dark:opacity-90 opacity-70 absolute right-vw md:left-[unset] left-[unset] md:right-vw bottom-vw text-[3.8vw] md:text-[2.5vw] lg:text-[25px] leading-[5.5vw] md:leading-[2.7vw] lg:leading-[32px] text-right font-[500]'>
          <Animated show={onPageActive}>
            <h3>@patrkvee is a software engineer</h3>
          </Animated>
          <Animated show={onPageActive} delay={100}>
            <h3>and a full stack web developer </h3>
          </Animated>
          <Animated show={onPageActive} delay={180}>
            <h3>based in California, US</h3>
          </Animated>
        </div>
      </div>

      {/* DIVIDER */}

      <div className='px-vw pt-[10vw]'>
        {/* PROJECTS HEADER DIVIDER */}
        <div>
          <Animated show={onPageActive}>
            <h2 className='text-[7vw] font-bold'>SIDE PROJECTS</h2>
          </Animated>
        </div>

        {/* PROJECTS DIVIDER */}
        <div className='flex mt-4 flex-wrap md:flex-nowrap'>
          <div className='flex-0 p-vw pl-0'>
            <Link href='/archive'>
              <button className='p-3 px-[3vw] border-2 whitespace-nowrap sticky top-[10vw]'>View All Projects</button>
            </Link>
          </div>
          <div id='projects' className='flex-1 basis-[1000px]'>
            {/* DIVIDER ROW */}
            {profile.projects.slice(0, 5).map((proj, index) => (
              <ProjectCard proj={proj} index={index} key={index} />
            ))}
          </div>
        </div>
        {/* SKILLS DIVIDER */}
        {/* <div>
          {profile.skills.map(({ title, description, stackList }, index) => (
            <SkillCard
              title={title}
              description={description}
              stackList={stackList}
            />
          ))}
        </div> */}
        <Text className='text-orange-500 py-7 bg-orange-50 font-bold'>IN DEVELOPMENT</Text>
      </div>
    </>
  )
}