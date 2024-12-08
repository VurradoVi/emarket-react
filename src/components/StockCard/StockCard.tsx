import { useState } from 'react'
import styles from './StockCard.module.scss'
import { IStock } from '../../types/stock';

interface StockCardProps {
  stockItem: IStock; 
}

export default function StockCard({stockItem}: StockCardProps) {
    const [isFavorite, setIsFavorite] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
  return (
    <div className={styles.stockCard}>
      <img src={stockItem.img} alt="Phone" />
      <div className={styles.stock}>- {stockItem.stock} %</div>
      <h3 className={styles.about}>{stockItem.title}</h3>
      <div className={styles.price}>
        <h1>{stockItem.price - Math.round((stockItem.price*(stockItem.stock / 100)))} ₽</h1>
        <p style={{textDecoration: 'line-through', opacity: '0.5'}}>{stockItem.price} ₽</p>
      </div>
      <div className={styles.favorite}>
        <p style={{color: '#169B00', fontSize: '14px'}}>В наличии</p>
        <img onClick={()=> setIsFavorite(!isFavorite)} src={isFavorite ? './favorite2.svg' : "./favorite.svg"} alt="favorite" />
      </div>
      <button onClick={() => setIsClicked(!isClicked)} style={{backgroundColor: isClicked ? '#BCC5FF' : "#091D9E"}}>В корзину</button>
    </div>
  )
}
