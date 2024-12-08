import { useEffect, useState } from "react";
import StockCard from "../StockCard/StockCard";
import styles from "./Stock.module.scss";
import axios from "axios";
import { IStock } from "../../types/stock";

export default function Stock() {
  const [stockItem, setStockItem] = useState<IStock[]>([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const stockData = await axios.get("http://localhost:3000/stock");
        setStockItem(stockData.data);
      } catch (error) {
        alert('Ошибка с БД (Stock)')
        console.log("Ошибка с бд stock", error)
      }
    };
    FetchData();
  }, []);
  return (
    <div className={styles.stock}>
      <h2>Акции</h2>
      <div style={{ display: "flex", flexWrap:'wrap', gap: '10px', width: '1500px' }}>
        {stockItem.map((item) => (
          <StockCard key={item.id} stockItem={item} />
        ))}
      </div>
    </div>
  );
}
