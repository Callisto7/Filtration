import React from 'react'

export default function Card(props) {
    const { width = '18rem', margin = '0 auto', children, title, text, btnName } = props;
  return (
    <div className="card" style={{width: width, margin: margin}}>
        {children}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href="/" className='btn btn-primary'>{btnName}</a>
        </div>
    </div>
  )
}
