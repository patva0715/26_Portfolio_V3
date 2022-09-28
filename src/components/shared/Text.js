import React from 'react'

const Text = ({children,className}) => {
  return (
    <p className={'text-sm md:text-md lg:text-max leading-sm md:leading-md lg:leading-max font-[200] '+className}>{children}</p>
  )
}

export default Text