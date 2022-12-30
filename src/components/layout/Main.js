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
        <main className='border-0 border-red-500 min-h-[100vh]'>
            {children}
        </main>
    )
}

export default Main