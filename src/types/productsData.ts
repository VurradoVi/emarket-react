export interface IProduct {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    stock_quantity?: number;
    image_url: string;
  };