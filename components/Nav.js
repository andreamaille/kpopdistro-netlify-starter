import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAppContext } from '../state'
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
            <a>Shopping Cart</a>
          </Link>
          <Counter />
        </li>
      </ul>
    </StyledNav>
  )
}
