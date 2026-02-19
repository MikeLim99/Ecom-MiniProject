import React from 'react'

function Button({ Title, ClassName }) {
  return (
    <button className={`py-2 px-4 bg-contrast-200 text-white rounded-md ${ClassName}`}>{Title}</button>
  )
}

export default Button