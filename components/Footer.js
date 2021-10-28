import Link from 'next/link'
import { StyledFooter, StyledSection, StyledFineprint } from './Footer.style.js'

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledSection>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>New Releases</li>
            <li>Merch</li>
          </ul>
          <ul>
            <li>KPOP DISTRO</li>
            <li>77 Ocean Avenue</li>
            <li>Toronto ON</li>
          </ul>
        </StyledSection>
        <StyledFineprint>
          <p>
            This project was built with{' '}
            <a href="https://twitter.com/cassidoo">Cassidy Williams'</a> Shopify
            Next Netlify starter{' '}
            <a href="https://github.com/cassidoo/shopify-next-netlify">
              open source on GitHub.
            </a>{' '}
            KPOP Distro is a fake shopify storefront created and designed by{' '}
            <a href="https://twitter.com/andrea_codes">andrea_codes</a>.
            <Link href="/about">
              <a> Learn more about this project.</a>
            </Link>
          </p>
        </StyledFineprint>
      </StyledFooter>
    </>
  )
}
