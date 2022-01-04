import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-image: url('/bg-grid.jpg');
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
  font-size: 45px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;
  @media (min-width: 768px) {
    font-size: 80px;
    width: 700px;
  }
  & a {
    color: var(--dark-pink);
  }
`
