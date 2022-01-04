import Link from 'next/link'
import { StyledNav } from './Nav.style.js'
import Counter from './Counter'

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/newReleases">
            <a>New Releases</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>Your Cart</a>
          </Link>
          <Counter />
        </li>
      </ul>
    </StyledNav>
  )
}
