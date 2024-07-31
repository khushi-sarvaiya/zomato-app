import React from 'react'

const Input = (props:any) => {
    
    
    return (
        <div>
        <input type={props.type} placeholder={props.placeholder} onChange={props.onChange}  className={props.className} ></input>
    </div>
  )
}

export default Input