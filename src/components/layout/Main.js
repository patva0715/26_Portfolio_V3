import React, { useEffect, useState } from 'react'

const Main = ({ children }) => {
    const [height,setHeight] = useState(0)
    useEffect(()=>{
        setHeight(innerHeight)
    },[])
    return (
        <main className='text-gray dark:text-amber bg-light dark:bg-dark border-2 border-red-500 overflow-scroll px-1 md:px-3' style={{height,maxHeight:height}}>
            <div className='min-h-[5rem]'/>
            {children}
        </main>
    )
}

export default Main