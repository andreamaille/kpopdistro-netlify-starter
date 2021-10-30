import styled from 'styled-components'

export const StyledNav = styled.nav`
  background-color: var(--white);
  border: 1px solid var(--black);
  padding: 16px;
  width: 80%;
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

  & li:first-child {
    padding-left: 0;xw
  }

  & li:last-child {
    padding-right: 0;
  }

  & a {
    color: var(--black);
    text-transform: uppercase;
  }

  & a:hover {
    border-bottom: 2px solid var(--secondary);
  }
`
