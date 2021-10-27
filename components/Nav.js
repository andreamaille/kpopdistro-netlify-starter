import Link from 'next/link'

import { StyledNav } from './Nav.style.js'

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href="/">
            <a>New Releases</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Albums</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Merch</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>Shopping Cart</a>
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}
