
import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function ContactPage(){

    return(
        <>
            <Head>
                <title>about</title>
                <meta name="description" content="About Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar/>
            <main className={styles.main}>
                <h1>Contact</h1>
            </main>    
        </>
    )
}