import React from 'react'

const Text = ({children,className}) => {
  return (
    <p className={'text-sm lg:text-max font-[200] whitespace-nowrap opacity-70 '+className}>{children}</p>
  )
}

export default Text