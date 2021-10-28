import Head from 'next/head'
import ProductListing from '@components/ProductListing'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>K-POP Distro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ul>
          {products.map((p, index) => (
            <ProductListing key={`product${index}`} product={p.node} />
          ))}
        </ul>
      </main>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const products = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  )
    .then(res => res.json())
    .then(response => {
      console.log('--- built home page ---')
      return response.products.edges
    })

  return {
    props: {
      products,
    },
  }
}
