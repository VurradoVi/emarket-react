import { useEffect, useState } from "react";
import { IStock } from "../../types/stock";
import Advertising from "../Ad/Advertising";
import Catalog from "../Catalog/Catalog";
import Container from "../Container/Container";
import Header from "../Header/Header";
import Stock from "../Stock/Stock";
import axios from "axios";
import { IProduct } from "../../types/productsData";
import Drawer from "../Drawer/Drawer";

export default function Main() {
  const [stockItem, setStockItem] = useState<IStock[]>([]);
  const [productsItem, setProductsItem] = useState<IProduct[]>([]);
  const [isOpened, setIsOpened] = useState(false)

  const combinedItems = [
    ...productsItem,
    ...stockItem
  ];

  useEffect(() => {
    const FetchData = async () => {
      try {
        const stockData = await axios.get("http://localhost:3000/stock");
        setStockItem(stockData.data);
        const productsData = await axios.get("http://localhost:3000/products");
        setProductsItem(productsData.data)
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
        <Header combinedItems={combinedItems} setIsOpened={setIsOpened} />
        <Drawer isOpened={isOpened} setIsOpened={setIsOpened} />
        <Advertising />
        <Catalog />
        <Stock stockItem={stockItem} />
      </Container>
    </>
  );
}
