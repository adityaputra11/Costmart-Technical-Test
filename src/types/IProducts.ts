export interface IProducts extends Array<IProduct> {}

export interface IProduct {
  name: string;
  category: string;
  price: string;
  unit: string;
  selected: boolean;
}
