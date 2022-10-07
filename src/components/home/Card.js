import React from 'react'

const Card = ({ proj,index }) => {
    return (
        <>
            <div className='border-[1px] w-full opacity-30'></div>
            <div className='flex' style={{ flexDirection: index % 2 == 0 ? 'row' : 'row-reverse' }}>

                <div className='border-[1px] opacity-30' />

                <article className='flex-1 p-[3vw] flex flex-col'>
                    <h3 className='text-[3vw]'>{proj.title}</h3>
                    <p className='flex-1'>{proj.description}</p>
                    <p className='flex-0'>Website</p>
                </article>
                <div className='border-[1px] opacity-30'></div>
                <figure className='flex-1 p-[3vw]'>
                    <div className='w-full aspect-[.8] relative flex items-center overflow-hidden border-0 border-red-500'>
                        <img src={`https://picsum.photos/seed/${proj.title}/400/600?grayscale`} alt='project image' className='absolute object-cover w-full h-full' />
                    </div>
                </figure>
                <div className='border-[1px] opacity-30'></div>
            </div>
        </>
    )
}

export default Card