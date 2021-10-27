import Link from 'next/link'
import styled from 'styled-components'

import { StyledButton } from './Button.style.js'

export default function Header() {
  return (
    <header className="app-header">
      <p>Hello</p>
      <StyledButton buttonLabel="Really?" backgroundColor="red"></StyledButton>
      <h1>
        <Link href="/">
          <a>Shoperoni</a>
        </Link>
      </h1>
      <nav className="main-nav">
        <ul>
          <li className="main-nav-item">
            <Link href="/">
              <a>All Products</a>
            </Link>
          </li>
          {/* <li className="main-nav-item">
            <Link href="/cheeses"><a>Cheeses</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/meats"><a>Meats</a></Link>
          </li>
          <li className="main-nav-item">
            <Link href="/boards"><a>Boards</a></Link>
          </li> */}
          <li className="main-nav-item">
            <Link href="/cart">
              <a className="cart cartLink">Shopping Cart</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
