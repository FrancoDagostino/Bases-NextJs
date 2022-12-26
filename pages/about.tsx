import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { MainLayout } from '../components/layout/MainLayout'
import { DarkLayout } from '../components/layout/DarkLayout'

const inter = Inter({ subsets: ['latin'] })

export default function AboutPage() {
  return (
      <div className={styles.grid}>
        <h1 className={styles.title}>
            Ir a <Link href="/" >Home</Link>
        </h1>
      </div>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element){
  return(
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}