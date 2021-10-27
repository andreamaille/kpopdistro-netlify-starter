import Link from 'next/link'

import { StyledHeader, StyledH1 } from './Header.style.js'

import Nav from './Nav.js'

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>
        <Link href="/">
          <a>K-POP Distro</a>
        </Link>
      </StyledH1>
      <Nav />
    </StyledHeader>
  )
}
