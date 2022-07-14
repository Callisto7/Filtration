import React from 'react'

export default function CardImg({ src, alt}) {
  return (
    <div className="thumb">
        <img
            className="card-img-top"
            onError={(event) => event.target.style.left= '-15px'}
            src={src} 
            alt={alt} 
        />
    </div>
  )
}
