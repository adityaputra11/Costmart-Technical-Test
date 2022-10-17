import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {color} from '../../helpers/dimens';
import CartTemplate from '../templates/CartTemplate';

const CartScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.empty} />
      <SafeAreaView style={styles.background}>
        <CartTemplate />
      </SafeAreaView>
      <SafeAreaView style={styles.empty} />
    </>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  empty: {flex: 0, backgroundColor: color.white},
});

export default CartScreen;
