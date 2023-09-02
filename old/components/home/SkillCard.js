import React from 'react'
import Animated from '../shared/Animated'
import Text from '../shared/Text'

const SkillCard = ({ title, description, stackList }) => {
    return (
        <div className='flex'>
            <div className='flex-1 basis-[65%]'>
                <Text>{title}</Text>
                <Text>{description}</Text>
            </div>
            <div className='flex-1 flex flex-wrap basis-[35%]'>
                {stackList.map((tech, index) => (
                    <Container key={index} tech={tech}/>
                ))}
            </div>
        </div>
    )
}

const Container = ({ tech }) => {
    return (
        <div className='aspect-square border-2 w-[25%] border-red-700'>
            <Text>{tech}</Text>
        </div>
    )
}

export default SkillCard