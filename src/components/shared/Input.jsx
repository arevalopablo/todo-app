import React from 'react'

const Input = (props) => {
    const {labelTxt, value, onChange, name, className} = props
  return (
    <div className={className}>
        <label htmlFor="">{labelTxt}</label>
        <input type="text" name={''} id="" value={value} onChange={onChange}/>
    </div>
  )
}

export default Input