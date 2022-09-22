import React, { useEffect, useState } from 'react'
import { useTransition, a, easings } from 'react-spring'
import useMeasure from 'react-use-measure'

const Animated = ({ children, show },) => {
    const [objHeight, setObjHeight] = useState(0)
    const [ref, { height }] = useMeasure()
    const transition = useTransition(show, {
        from: { transform: 'translate3d(0%,110%,0)' },
        enter: { transform: 'translate3d(0%,0%,0)' },
        leave: { transform: 'translate3d(0%,-100%,0)' },
        delay: 0,
        config: {
            duration: 220,
            easing: easings.easeInOutSine
        }
    })
    useEffect(() => {
        if(height)setObjHeight(height)
    }, [height])
    return (
        <div className='overflow-hidden border-0 border-white' style={{ height: `${objHeight}px` }}>
            {transition((style, i) => (
                <>
                    {i ? <a.div ref={ref} style={style} className='relative'>{children}</a.div> :
                        <></>}
                </>
            ))}
        </div>
    )
}

export default Animated