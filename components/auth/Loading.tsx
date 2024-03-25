import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-4 justify-center items-center'>
        <Image
            alt='logo'
            src='/logo.svg'
            width={120}
            height={120}
            className='animate-pulse duration-700'
        />
    </div>
  )
}

export default Loading