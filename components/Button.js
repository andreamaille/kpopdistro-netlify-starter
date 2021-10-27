import React from 'react'

function Button({ buttonLabel }) {
  function hello() {
    console.log('hellllooooo')
  }
  return <button onClick={hello}>{buttonLabel}</button>
}

export default Button
