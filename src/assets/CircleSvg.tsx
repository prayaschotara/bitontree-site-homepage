import React from 'react'

export interface CircleSvg  {
    height?: string,
    width?: string
}

export default function CircleSvg({height, width}: CircleSvg) {
  return (
    <svg width={width || '407'} height={height || '577'} viewBox="0 0 407 577" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M407 65.0886C369.746 44.632 326.979 33 281.5 33C137.078 33 20 150.301 20 295C20 439.699 137.078 557 281.5 557C326.979 557 369.746 545.368 407 524.911V65.0886Z" fill="#FFEBF0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M407 42.5069C369.215 23.6229 326.596 13 281.5 13C126.032 13 0 139.256 0 295C0 450.744 126.032 577 281.5 577C326.596 577 369.215 566.377 407 547.493V545.255C369.263 564.285 326.63 575 281.5 575C127.14 575 2 449.643 2 295C2 140.357 127.14 15 281.5 15C326.63 15 369.263 25.7155 407 44.7454V42.5069Z" fill="#FFEBF0"/>
        <path d="M227.283 32.0949L201.836 25.514L220.259 6.76737L227.283 32.0949Z" fill="#FFEBF0"/>
    </svg>
  )
}
