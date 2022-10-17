import React, {memo, useCallback, useState} from 'react';
import {Alert, FlatList} from 'react-native';
import {products} from '../../data/product';
import {IProduct, IProducts} from '../../types/IProducts';
import {BottomOrder} from '../molecules/BottomOrder';
import {CartItem} from '../molecules/ChartItem';

/**
 * Task 2: Buatlah suatu component keranjang dengan menggunakan react hook dan harus 1 render
 * ketika berganti value (misal menambah atau mengurang item)
 */
export const CartList = memo(() => {
  const [cartList, setCartList] = useState<IProducts>(products);

  const onIncrement = useCallback((id: number) => {
    setCartList(tempCartList => {
      const newCartList = [...tempCartList];
      const position = newCartList.findIndex(it => it.id === id);
      newCartList.splice(position, 1, {
        ...newCartList[position],
        qty: newCartList[position].qty + 1,
      });
      return newCartList;
    });
  }, []);

  const onDeleteConfirmation = (id: number) => {
    Alert.alert('Delete Confirmation', 'Are you sure delete this item?', [
      {
        text: 'Ok',
        onPress: onDelete.bind(null, id),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
    ]);
  };

  const onDecrement = useCallback((id: number) => {
    setCartList(tempCartList => {
      const newCartList = [...tempCartList];
      const position = newCartList.findIndex(it => it.id === id);
      if (newCartList[position].qty === 1) {
        onDeleteConfirmation(id);
        return newCartList;
      } else {
        newCartList.splice(position, 1, {
          ...newCartList[position],
          qty:
            newCartList[position].qty > 0
              ? newCartList[position].qty - 1
              : newCartList[position].qty,
        });

        return newCartList;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDelete = useCallback((id: number) => {
    setCartList(tempCartList => {
      return [...tempCartList].filter(it => it.id !== id);
    });
  }, []);

  const onSetKeyExtractor = useCallback(
    (item: IProduct) => String(item.id),
    [],
  );

  const getTotalShoppingPrice = (): number => {
    let total = 0;
    cartList.forEach(it => {
      total += it.qty * it.price;
    });

    return total;
  };

  const renderItem = ({item}: {item: IProduct}) => {
    const _id = item.id;
    return (
      <CartItem
        item={item}
        onIncrement={onIncrement.bind(null, _id)}
        onDecrement={onDecrement.bind(null, _id)}
        onDelete={onDeleteConfirmation.bind(null, _id)}
      />
    );
  };

  return (
    <FlatList
      data={cartList}
      renderItem={renderItem}
      keyExtractor={onSetKeyExtractor}
      ListFooterComponent={<BottomOrder total={getTotalShoppingPrice()} />}
    />
  );
});
