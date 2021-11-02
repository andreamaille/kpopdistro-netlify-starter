import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import NewReleasesCard from '@components/NewReleasesCard'

export default function NewReleases({ newReleases }) {
  return (
    <>
      <Head>
        <title>K-POP Distro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <h1>{newReleases.title}</h1>
        <p>{newReleases.description}</p>
        {newReleases.products.edges.map((p, index) => (
          <NewReleasesCard key={`newRelease${index}`} product={p.node} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const newReleases = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-new-releases`
  )
    .then(res => res.json())
    .then(response => {
      console.log('--- built home page ---')
      console.log(response)
      return response.collectionByHandle
    })

  return {
    props: {
      newReleases,
    },
  }
}
