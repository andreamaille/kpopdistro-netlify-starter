import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Cart from '@components/Cart'
import styled from 'styled-components'
import { useAppContext } from '../state'

export default function CartPage() {
  return (
    <>
      <Head>
        <title>K-POP Distro | Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <article>
          <StyledH2>✨ Your Cart ✨</StyledH2>
          <Cart />
        </article>
      </main>

      <Footer />
    </>
  )
}

const StyledH2 = styled.h2`
  text-align: center;
`
