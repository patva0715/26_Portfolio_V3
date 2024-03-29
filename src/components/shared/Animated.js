import React, { useEffect, useState } from 'react'
import { useTransition, a, easings, config } from 'react-spring'
import useMeasure from 'react-use-measure'

const conDef = { ...config.default, tension: 150 }
const conMol = { ...config.default, tension: 80 }

// const movements = {
//     'right':{
//         from:'translate3d(100%,0,0)',
//         leave:'translate3d(-100%,0,0)',
//     }
// }

const Animated = ({ children, show, className, fromSide, molasses, delay }) => {
    const [objHeight, setObjHeight] = useState(0)
    const [ref, { height }] = useMeasure()
    const transition = useTransition(show, {
        from: { transform: fromSide ? 'translate3d(-110%,0%,0)' : 'translate3d(0%,110%,0)' },
        enter: { transform: 'translate3d(0%,0%,0)' },
        leave: { transform: fromSide ? 'translate3d(110%,0%,0)' : 'translate3d(0%,-110%,0)' },
        delay: delay && show ? delay : 0,
        // config: {...config.molasses,tension:310,friction:55},
        config: molasses && show ? conMol : conDef

    })
    useEffect(() => {
        if (height) setObjHeight(height)
        // console.log(movements['right'])
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