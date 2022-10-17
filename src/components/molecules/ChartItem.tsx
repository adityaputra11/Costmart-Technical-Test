import React, {memo} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from '../../helpers/dimens';
import {currencyFormatter} from '../../helpers/utils';
import IconButton from '../atoms/button/IconButton';

interface ICartItem {
  name: string;
  onIncrement(): void;
  count: number;
}

const Item = ({name, onIncrement, count}: ICartItem) => {
  // console.log('renderItems', name);
  return (
    <View style={styles.itemCart}>
      <View style={styles.rowOnly}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={styles.row}>
          <View>
            <Text>{name}</Text>
            <Text>10 Gram</Text>
            <View style={styles.counter}>
              <TouchableOpacity style={{paddingHorizontal: 10}}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity
                style={{paddingHorizontal: 10}}
                onPress={onIncrement}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{alignItems: 'flex-end', justifyContent: 'space-evenly'}}>
            <IconButton />
            <Text>{currencyFormatter(1000000, 'Rp.')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const areEqual = (prevProps: {count: number}, nextProps: {count: number}) => {
  const {count} = nextProps;
  const {count: prevCount} = prevProps;

  /*if the props are equal, it won't update*/
  const isCountEqual = count === prevCount;

  return isCountEqual;
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
  logo: {
    width: 58,
    height: 58,
    marginStart: 20,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingStart: 20,
    flex: 1,
  },
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
});

export const CartItem = memo(Item, areEqual);
