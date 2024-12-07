import { ICards } from "../../types/catalogCard";
import CatalogCard from "../card/CatalogCard";
import styles from "./Catalog.module.scss";

export default function Catalog() {
  const catalogCard:ICards[] = [
    {
      id: 1,
      img: "/img/card1.png",
      title: "Смартфоны",
    },
    {
      id: 2,
      img: "/img/card2.png",
      title: "Ноутбуки",
    },
    {
      id: 3,
      img: "/img/card3.png",
      title: "Компьютеры",
    },
    {
      id: 4,
      img: "/img/card4.png",
      title: "Телевизоры",
    },
    {
      id: 5,
      img: "/img/card5.png",
      title: "Планшеты",
    },
    {
      id: 6,
      img: "/img/card6.png",
      title: "Колонки",
    },
  ];
  return (
    <div className={styles.catalog}>
      <h2>Каталог</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {catalogCard.map((item) => (
          <CatalogCard key={item.id} img={item.img} title={item.title} />
        ))}
      </div>
    </div>
  );
}
