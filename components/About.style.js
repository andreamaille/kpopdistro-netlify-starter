import styled from 'styled-components'

export const StyledSection = styled.section`
  color: var(--white);
  background-color: var(--dark-purple);
  border-radius: 12px;
  padding: 24px;
  & h3 {
    font-family: 'Ubuntu', sans-serif;
    font-size: 50px;
    text-shadow: 4px 3px 0 var(--pale-pink);
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  & p {
    line-height: 2;
    font-weight: 400;
    margin-bottom: 16px;
  }
  & a {
    border-bottom: 2px solid var(--white);
  }
`
