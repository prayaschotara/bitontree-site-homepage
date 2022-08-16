import React from 'react'

export default function Button({bgColor, textColor, title}) {
  return (
    <button className={`bg-${bgColor} p-4 rounded-full text-${textColor} font-Inter
    font-semibold hover:scale-105 transition-all duration-300 active:scale-95`}>
        {title}
    </button>
  )
}
