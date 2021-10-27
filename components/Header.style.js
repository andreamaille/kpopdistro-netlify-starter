import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-image: url(${'bg-grid.jpg'});
  background-size: contain;
  background-position: center;
  position: relative;
  height: 250px;
`

export const StyledH1 = styled.h1`
  font-family: 'Ubuntu', sans-serif;
  font-size: var(--font-size-display);
  text-shadow: 4px 3px 0 var(--pale-pink);
  text-transform: uppercase;
  text-align: center;
  padding-top: 50px;
  & a {
    color: var(--dark-pink);
  }
`
