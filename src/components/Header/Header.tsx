import { ChangeEvent, useState } from "react";
import styles from "./Header.module.scss";
import { IProduct } from "../../types/productsData";
import { IStock } from "../../types/stock";

interface ProductProps {
  combinedItems: (IStock | IProduct)[];
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ combinedItems, setIsOpened }: ProductProps) {
  const [value, setValue] = useState("");

  const searchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const filteredItem = combinedItems.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
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
                  {item.name}
                </div>
              ))
            ) : (
              <div className={styles.noResults}>Результатов нет</div>
            )}
          </div>
        )}
        <div
          onClick={() => setValue("")}
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
        <li onClick={() => setIsOpened(true)}>
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
