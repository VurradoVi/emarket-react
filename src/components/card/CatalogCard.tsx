import styles from "./CatalogCard.module.scss"

interface CatalogCardProps {
  img: string,
  title: string
}

export default function CatalogCard({img, title}: CatalogCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img src={img} alt="CatalogImg" />
      </div>
      <p>{title}</p>
    </div>
  )
}
