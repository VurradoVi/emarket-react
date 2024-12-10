import { IStock } from "../../types/stock";
import StockCard from "../StockCard/StockCard";
import styles from "./Stock.module.scss";

interface StockProps {
  stockItem: IStock[];
}

export default function Stock({stockItem}:StockProps) {
  
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
