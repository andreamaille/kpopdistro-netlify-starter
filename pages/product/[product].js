import Head from 'next/head'
import ProductPageContent from '@components/ProductPageContent'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useAppContext } from '../../state'

export default function ProductPage({ product }) {
  const { cartId } = useAppContext()

  return (
    <div className="container">
      <Head>
        <title>KPOP DISTRO | Buy {product.node.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <ProductPageContent product={product.node} />
      </main>
      <Footer />
    </div>
  )
}

export async function getProductList() {
  const products = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  )
    .then(res => res.json())
    .then(response => {
      console.log('--- built product pages ---')
      return response.products.edges
    })
  return products
}

export async function getStaticPaths() {
  const products = await getProductList()
  const routes = products.map(p => {
    const params = `/product/${p.node.handle}`
    return params
  })

  return { paths: routes, fallback: false }
}

export async function getStaticProps({ params }) {
  const products = await getProductList()

  const product = products.find(p => p.node.handle === params.product)

  return {
    props: {
      product,
    },
  }
}
