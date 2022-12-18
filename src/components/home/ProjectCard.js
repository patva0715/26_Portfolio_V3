import { useMemoOne } from '@react-spring/shared'
import React, { useState } from 'react'
import { useTransition, a } from 'react-spring'

const ProjectCard = ({ proj, index }) => {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='border-[1px] w-full opacity-30'></div>

            <a href={ proj.link}className='flex' style={{ flexDirection: index % 2 == 0 ? 'row' : 'row-reverse' }}
                onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>

                <div className='border-[1px] opacity-30' />

                <article className='flex-1 p-[3vw] flex flex-col'>
                    <HeaderLink show={show} title={proj.title} />
                    <p className='flex-1 text-sm lg:text-[18px] mt-[3vw]'>{proj.description}</p>
                    <p className='flex-0'>Website</p>
                </article>

                <div className='border-[1px] opacity-30'></div>

                <figure className='flex-1 p-[3vw]'>
                    <div className='w-full aspect-[.8] relative flex items-center overflow-hidden border-0 border-red-500'>
                        <img src={`https://picsum.photos/seed/${proj.title}/400/600?grayscale`} alt='project image' className='absolute object-cover w-full h-full' />
                    </div>
                </figure>

                <div className='border-[1px] opacity-30'></div>

            </a>
        </>
    )
}
const HeaderLink = ({ title, delay, show }) => {

    const transitionUnderline = useTransition(show, {
        from: { transform: 'translate3d(-100%,0%,0)' },
        enter: { transform: 'translate3d(0%,0%,0)' },
        leave: { transform: 'translate3d(100%,0%,0)' },
        delay: 0
        // config: {...config.molasses,tension:310,friction:55},
        // config: molasses && show ? conMol : conDef
    })
    return (
        <div className='border-0 flex'>
            <div className=' flex-0 w-min relative overflow-hidden'>
                <h3 className='text-[4vw] lg:text-[24px] lg:leading-[42 px] font-bold whitespace-nowrap '>{title}</h3>
                {transitionUnderline((style, i) => (
                    <>
                        {i ?
                            <a.div style={style} className='pointer-events-none w-full min-h-[1px] lg:min-h-[3px] bg-gray dark:bg-amber absolute bottom-[.5vw]'>
                            </a.div>
                            :
                            <></>}
                    </>
                ))}
            </div>

        </div>
    )
}

export default ProjectCard