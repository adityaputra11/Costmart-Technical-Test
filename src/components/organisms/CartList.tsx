import React, {memo, useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import {products} from '../../data/product';
import {IProduct} from '../../types/IProducts';
import {CartItem} from '../molecules/ChartItem';

/**
 * Task 2: Buatlah suatu component keranjang dengan menggunakan react hook dan harus 1 render
 * ketika berganti value (misal menambah atau mengurang item)
 */
export const CartList = memo(() => {
  const [cartList, setCartList] = useState(products);

  const onIncrement = useCallback(
    (id: number) => {
      const tempArr = cartList.map(it => {
        if (it.id === id) {
          it.qty++;
          return it;
        } else {
          return it;
        }
      });
      setCartList(tempArr);
    },
    [cartList],
  );

  const onSetKeyExtractor = useCallback(
    (item: IProduct) => String(item.id),
    [],
  );

  const renderItem = ({item}: {item: IProduct}) => {
    return (
      <CartItem
        name={item.name}
        count={item.qty}
        onIncrement={onIncrement.bind(null, item.id)}
      />
    );
  };

  return (
    <FlatList
      data={cartList}
      renderItem={renderItem}
      keyExtractor={onSetKeyExtractor}
    />
  );
});
