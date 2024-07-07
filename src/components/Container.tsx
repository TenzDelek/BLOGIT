import React from 'react'

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className=' flex flex-col bg-white min-h-screen border-l border-r mx-auto max-w-[1100px]'>
        {children}
    </div>
  )
}

export default Container