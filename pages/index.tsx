import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home({}) {
  return (
    <MainLayout>
      <div className={styles.grid}>
          <h1 className={styles.title}>
            Ir a <Link href="/about">About</Link>
          </h1>
        </div>
    </MainLayout>
  )
}
