import React from 'react'

function TextHeader({Title}) {
  return (
    <div className='flex text-2xl font-bold h-10 gap-5 items-center text-contrast-200 text-[30px] mx-20 mt-10'>
        <div className='h-full bg-highlight w-2'></div>
        <h1>{Title}</h1>
    </div>
  )
}

export default TextHeader