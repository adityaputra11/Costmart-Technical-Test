import {ImageURISource} from 'react-native';

export interface IProducts extends Array<IProduct> {}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  unit: string;
  unitCount: number;
  qty: number;
  image?: ImageURISource;
}
