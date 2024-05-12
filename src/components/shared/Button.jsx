import React from 'react'

const Button = (props) => {
    const {btnTxt, onClick, className} = props
  return (
    <button className={className} onClick={onClick} style={{...props}} >{btnTxt}</button>
  )
}

export default Button