import React, { useEffect, useState } from 'react'
import { useTransition, a, easings, config } from 'react-spring'
import useMeasure from 'react-use-measure'

const Animated = ({ children, show, className,fromSide }) => {
    const [objHeight, setObjHeight] = useState(0)
    const [ref, { height }] = useMeasure()
    const transition = useTransition(show, {
        from: { transform: fromSide?'translate3d(-110%,0%,0)':'translate3d(0%,110%,0)' },
        enter: { transform: 'translate3d(0%,0%,0)' },
        leave: { transform: fromSide?'translate3d(100%,0%,0)':'translate3d(0%,-100%,0)' },
        delay: 0,
        config: {...config.molasses,tension:400,friction:100}
    })
    useEffect(() => {
        if (height) setObjHeight(height)
    }, [height])
    return (
        <div className={className}>
            <div className='overflow-hidden border-0 border-red-500' style={{ height: `${objHeight}px` }}>
                {transition((style, i) => (
                    <>
                        {i ? <a.div ref={ref} style={style} className='relative'>{children}</a.div> :
                            <></>}
                    </>
                ))}
            </div>
        </div>
    )
}

export default Animated