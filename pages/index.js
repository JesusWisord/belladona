import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header';
import Hero from '../components/Hero';
import WhoAreWe from '../components/WhoAreWe'
import Gallery from '../components/Gallery'
import SocialMedia from '../components/SocialMedia'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Belladona</title>
      </Head>

      <Header />
      <Hero />
      <WhoAreWe />
      <Gallery />
      <SocialMedia />
      <Footer />
    </div>
  )
}
