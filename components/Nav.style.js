import styled from 'styled-components'

export const StyledNav = styled.nav`
  background-color: var(--dark-pink);
  padding: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  & ul {
    display: flex;
    justify-content: center;
  }
  & li {
    color: var(--white);
    padding: 0 12px;
  }

  & li:first-child {
    padding-left: 0;
  }

  & li:last-child {
    padding-right: 0;
  }

  & a {
    color: var(--pale-pink);
    text-transform: uppercase;
  }

  & a:hover {
    border-bottom: 2px solid var(--pale-pink);
  }
`
