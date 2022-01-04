import styled from 'styled-components'

export const StyledNav = styled.nav`
  font-size: var(--font-size-micro);
  background-color: var(--white);
  border: 1px solid var(--black);
  padding: 16px;
  width: 80%;
  max-width: 1000px;
  position: absolute;
  bottom: 0;
  @media (min-width: 768px) {
    font-size: var(--font-size-base);
  }
  & ul {
    display: flex;
    justify-content: center;
  }
  & li {
    color: var(--white);
    padding: 0 12px;
    position: relative;
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
