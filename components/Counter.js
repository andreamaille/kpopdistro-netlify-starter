import styled from 'styled-components'
import React, { Fragment }from 'react'
import { useAppContext } from '../state'
import { StyledCounter } from './Counter.style.js'


export default function Counter() {
  const { count } = useAppContext()
  const showCounter = count > 0

  return (
    <Fragment>
      {showCounter && (
        <StyledCounter>
          <span>{count}</span>
        </StyledCounter>
      )}
    </Fragment>
  )
}
