import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import About from '@components/About'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>KPOP Distro | About this Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <About />
      </main>

      <Footer />
    </>
  )
}
