import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Emarket</h1>
      <div className={styles.searchInput}>
        <img src="../search.svg" alt="search" />
        <input type="text" placeholder="Поиск" />
      </div>
      <ul>
        <li>
          <img src="../catalog.svg" alt="Каталог" />
          <p>Каталог</p>
        </li>
        <li>
          <img src="../basket.svg" alt="Корзина" />
          <p>Корзина</p>
        </li>
        <li>
          <img src="../profile.svg" alt="Профиль" />
          <p>Профиль</p>
        </li>
      </ul>
      <div className={styles.headerLine}></div>
    </div>
    
  );
}
