import { useState } from 'react'
import styles from './StockCard.module.scss'

export default function StockCard() {
    const [favorite, setFavorite] = useState(false)
  return (
    <div className={styles.stockCard}>
      <img src="/img/iphone.jpg" alt="Phone" />
      <div className={styles.stock}>- 4 %</div>
      <h3 className={styles.about}>Смартфон Apple iPhone 14 128GB</h3>
      <div className={styles.price}>
        <h1>84 999 ₽</h1>
        <p style={{textDecoration: 'line-through', opacity: '0.5'}}>87 999 ₽</p>
      </div>
      <div className={styles.favorite}>
        <p style={{color: '#169B00', fontSize: '14px'}}>В наличии</p>
        <img onClick={()=> setFavorite(!favorite)} src={favorite ? './favorite2.svg' : "./favorite.svg"} alt="favorite" />
      </div>
      <button>В корзину</button>
    </div>
  )
}
