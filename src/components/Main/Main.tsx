import { useEffect, useState } from "react";
import { IStock } from "../../types/stock";
import Advertising from "../Ad/Advertising";
import Catalog from "../Catalog/Catalog";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Stock from "../Stock/Stock";
import axios from "axios";

export default function Main() {
  const [stockItem, setStockItem] = useState<IStock[]>([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const stockData = await axios.get("http://localhost:3000/stock");
        setStockItem(stockData.data);
      } catch (error) {
        alert("Ошибка с БД (Stock)");
        console.log("Ошибка с бд stock", error);
      }
    };
    FetchData();
  }, []);
  return (
    <>
      <Container>
        <Header stockItem={stockItem} />
        <Advertising />
        <Catalog />
        <Stock stockItem={stockItem} />
      </Container>
    </>
  );
}
