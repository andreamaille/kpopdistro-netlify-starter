import styled from 'styled-components'

export const StyledNav = styled.nav`
  width: 100%;
  background-color: var(--dark-pink);
  position: absolute;
  bottom: 0;
  & ul {
    display: flex;
    justify-content: center;
  }
  & li {
    color: var(--white);
    padding: 0 12px;
  }
  & a {
    color: var(--pale-pink);
    text-transform: uppercase;
  }

  & a:hover {
    border-bottom: 2px solid var(--pale-pink);
  }
`
