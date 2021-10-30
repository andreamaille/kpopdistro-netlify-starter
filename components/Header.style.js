import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-image: url(${'bg-grid.jpg'});
  background-size: contain;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  bottom: 18px;
  height: 250px;
`

export const StyledH1 = styled.h1`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 50%,
    var(--highlight) 50%
  );
  font-size: 80px;
  text-transform: uppercase;
  text-align: center;
  width: 700px;
  margin: 0 auto;
  /* position: relative;
  top: 18%; */
  & a {
    color: var(--dark-pink);
  }
`
