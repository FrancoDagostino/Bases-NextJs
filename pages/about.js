import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>about</title>
        <meta name="description" content="About Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>

        <div className={styles.grid}>
          <h1 className={styles.title}>
            Ir a <Link href="/" >Home</Link>
          </h1>
        </div>
      </main>
    </>
  )
}