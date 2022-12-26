import { MainLayout } from "../../components/layout/MainLayout";
import styles from '../../styles/Home.module.css'


export default function PricingPage(){
    return(
        <MainLayout>
        <div className={styles.grid}>
        <h1 className={styles.title}>
            Pricing
        </h1>
      </div>
        </MainLayout>
    )
}