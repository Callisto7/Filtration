import React from 'react'
import '../styles/DetailsImg.css'

export default function DetailsImg({src, alt}) {
  return (
    <div className="DetailsImg-contents">
        <img
            className='DetailsImg-content' 
            src={src} 
            alt={alt} 
            style={{ left: !src ? '-15px' : ''}}
        />
    </div>
  )
}
