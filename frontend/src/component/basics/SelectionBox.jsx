import React from 'react'

function SelectionBox({ label, name, options, onChange }) {
  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select name={name} id={name} onChange={onChange} className="w-full p-2 border border-gray-300 rounded-md">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectionBox