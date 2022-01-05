import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Heading from '@components/Heading'
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
        <Heading
          title={newReleases.title}
          description={newReleases.description}
        />
        {newReleases.products.edges.map((p, index) => (
          <NewReleasesCard
            key={`newRelease${index}`}
            product={p.node}
            flexDirection={index % 2 === 0 ? 'row' : 'row-reverse'}
          />
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
      console.log('--- built new releases ---')
      return response.collectionByHandle
    })

  return {
    props: {
      newReleases,
    },
  }
}
