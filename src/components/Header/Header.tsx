import { ChangeEvent, useState } from "react";
import styles from "./Header.module.scss";
import { IStock } from "../../types/stock";

interface StockProps {
  stockItem: IStock[];
}

export default function Header({ stockItem }: StockProps) {
  const [value, setValue] = useState("");
  const reset = () => {
    setValue("");
  };

  const searchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const filteredItem = stockItem.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  return (
    <div className={styles.header}>
      <h1>Emarket</h1>
      <div className={styles.searchInput}>
        <img src="../search.svg" alt="search" />
        <input
          onChange={searchValue}
          value={value}
          type="text"
          placeholder="Поиск"
        />
        {value && (
          <div className={styles.searchResults}>
            {filteredItem.length > 0 ? (
              filteredItem.map((item) => (
                <div className={styles.resultItem} key={item.id}>
                  {item.title}
                </div>
              ))
            ) : (
              <div className={styles.noResults}>Результатов нет</div>
            )}
          </div>
        )}
        <div
          onClick={reset}
          className={`${styles.delete} ${value ? styles.deleteVisibility : ""}`}
        >
          x
        </div>
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
