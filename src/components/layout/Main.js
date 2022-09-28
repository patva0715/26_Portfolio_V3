import React, { useEffect, useState } from 'react'

const Main = ({ children }) => {
    const [height,setHeight] = useState(0)
    useEffect(()=>{
        setHeight(innerHeight)
        addEventListener('resize',()=>{
            if(innerHeight)setHeight(innerHeight)
        })
    },[])
    return (
        <main className='border-0 border-red-500 overflow-scroll px-1 md:px-4 lg:px-12' style={{height,maxHeight:height}}>
            <div className='h-[5rem]'/>
            {children}
        </main>
    )
}

export default Main