import React from 'react'

function InputBox({ label, Type = "text" }) {
  return (
    <div className='w-full'>
        <label className='block mb-2 text-sm font-medium text-gray-700'>{label}</label>
        <input type={Type} className='w-full p-2 border border-gray-300 rounded-md mb-4' placeholder={`Enter ${label.toLowerCase()}`} />
    </div>
  )
}

export default InputBox