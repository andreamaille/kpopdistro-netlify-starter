import { StyledSection } from './About.style.js'

export default function About() {
  return (
    <StyledSection>
      <h3>About this Project</h3>
      <p>
        KPOP Distro is a fake shopify storefront created and designed by{' '}
        <a href="https://twitter.com/andrea_codes">andrea_codes</a>. This
        project was built with{' '}
        <a href="https://twitter.com/cassidoo">Cassidy Williams'</a> Shopify
        Next Netlify starter which is{' '}
        <a href="https://github.com/cassidoo/shopify-next-netlify">
          open source on GitHub.
        </a>{' '}
        Go check it out!
      </p>
      <p>
        This project is hosted with <a href="https://bit.ly/2G29YwK">Netlify</a>{' '}
        and built with Next.js, styled components and the shopify storefront
        api.
      </p>
    </StyledSection>
  )
}
