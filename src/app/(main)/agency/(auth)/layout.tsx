import React from 'react'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='mx-auto h-full flex items-center justify-center '>{children}</div>
  )
}

export default layout