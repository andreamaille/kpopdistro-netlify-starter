export default function Footer() {
  return (
    <>
      <footer>
        <section className="testimonial">
          <h2>"The interplay of flavors between the cheese, meats and fruits is an absolute delight."</h2>
          <p>Paul Hotcakes</p>
        </section>
        <section className="app-footer-links">
          <ul>
            <li>About</li>
            <li>Company</li>
            <li>Locations</li>
            <li>Contact</li>
            <li>Hours</li>
          </ul>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
          <div className="newsletter">
            <h2 className="newsletter-title">Sign up for our newsletter:</h2>
            <input className="newsletter-input" type="email" placeholder="Enter your email" />
          </div>
        </section>
        <div className="project-credit">
          <p>
            This project was built with Cassidy Williams' Shopify Next Netlify starter which is{' '}
            <a href="https://github.com/cassidoo/shopify-next-netlify">open source on GitHub</a>. Follow Cassidy{' '}
            <a href="https://twitter.com/cassidoo">@cassidoo</a>. KPOP Distro is a fake shopify storefront created and designed by andrea_codes. This
            project is hosted with <a href="https://bit.ly/2G29YwK">Netlify</a>, built with Next.js.
          </p>
        </div>
      </footer>
    </>
  )
}
