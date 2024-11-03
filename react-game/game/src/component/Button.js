import React from 'react'

const Button = (props, play) => {
    return (
        <button className='button' onClick={play} >
            {props.title}
        </button>
    )
}

export default Button