import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color, icon, padding, textSize} from '../../helpers/dimens';
import {currencyFormatter} from '../../helpers/utils';
import {IProduct} from '../../types/IProducts';
import IconButton from '../atoms/button/IconButton';
interface ICartItem {
  item: IProduct;
  onIncrement(): void;
  onDecrement(): void;
  onDelete(): void;
}

const Item = ({item, onIncrement, onDecrement, onDelete}: ICartItem) => {
  // console.log('renderItems', item.id);
  return (
    <View style={styles.itemCart}>
      <View style={styles.rowOnly}>
        <Image
          style={styles.image}
          source={
            item.image ?? {
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }
          }
        />
        <View style={styles.row}>
          <View>
            <Text style={styles.lebelName}>{item.name}</Text>
            <Text style={styles.labelUnit}>
              {item.unitCount} {item.unit}
            </Text>
            <View style={styles.counter}>
              <TouchableOpacity
                onPress={onDecrement}
                style={styles.counterButton}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{item.qty}</Text>
              <TouchableOpacity
                style={styles.counterButton}
                onPress={onIncrement}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.rowEnd}>
            <IconButton src={icon.close_button} onPress={onDelete} />
            <Text style={styles.price}>
              {currencyFormatter(item.price * item.qty, 'Rp.')}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const areEqual = (prevProps: ICartItem, nextProps: ICartItem) => {
  /*if the props are equal, it won't update*/
  const isEqual = prevProps.item === nextProps.item;

  return isEqual;
};

const styles = StyleSheet.create({
  itemCart: {
    padding: 8,
    paddingVertical: 20,
    backgroundColor: color.white,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  image: {
    width: 58,
    height: 58,
    marginStart: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: color.secondary,
    borderRadius: padding.xl,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingStart: 20,
    flex: 1,
  },
  rowEnd: {alignItems: 'flex-end', justifyContent: 'space-between'},
  rowOnly: {
    flexDirection: 'row',
    flex: 1,
  },
  counter: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: color.secondary,
    borderRadius: 8,
    paddingVertical: 4,
    marginTop: 8,
  },
  counterButton: {paddingHorizontal: 10},
  lebelName: {
    fontWeight: 'bold',
    fontSize: textSize.md,
    color: color.primary,
  },
  labelUnit: {
    fontSize: textSize.sm,
    color: color.gray,
  },
  price: {
    fontSize: textSize.md,
    color: color.primary,
  },
});

export const CartItem = memo(Item, areEqual);
// export const CartItem = Item;
