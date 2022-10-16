export interface IProducts extends Array<IProduct> {}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: string;
  unit: string;
  qty: number;
}
