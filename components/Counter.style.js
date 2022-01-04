import styled from 'styled-components'

export const StyledCounter = styled.div`
  width: 20px;
  height: 20px;
  background-color: var(--secondary);
  border-radius: 50%;
  position: absolute;
  top: -43%;
  right: -15%;
  & span {
    display: block;
    font-size: var(--font-size-micro);
    position: relative;
    text-align: center;
    top: 3px;
    right: 1px;
  }
`
