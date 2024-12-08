import StockCard from '../StockCard/StockCard'
import styles from './Stock.module.scss'

export default function Stock() {
  return (
    <div className={styles.stock}>
      <h2>Акции</h2>
      <StockCard />
    </div>
  )
}
