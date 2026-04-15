import React from 'react'

function LoadingState({ message = 'Loading...' }) {
  return (
    <div className='flex min-h-[240px] w-full items-center justify-center px-6 py-10 gap-10'>
      <div className='flex flex-col items-center gap-4 rounded-xl border border-[#D9D9D9] bg-white px-8 py-6 shadow-sm w-[250px] h-[300px] justify-center'>
        <div className='h-10 w-10 animate-spin rounded-full border-4 border-[#D9D9D9] border-t-[#5DA9E9]' />
        <p className='text-sm text-gray-500'>{message}</p>
      </div>
    </div>
  )
}

export default LoadingState