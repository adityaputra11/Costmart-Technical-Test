import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, padding, textSize} from '../../helpers/dimens';
import {currencyFormatter} from '../../helpers/utils';
import Button from '../atoms/button/Button';
import {Spacer} from '../atoms/Spacer';

export const BottomOrder = ({total}: {total: number}) => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomCard}>
        <Text style={styles.labelTotal}>Total</Text>
        <Spacer height={30} />
        <Text style={styles.labelTotal}>{currencyFormatter(total, 'Rp.')}</Text>
      </View>
      <Button label="Place Order" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    padding: padding.xxl,
    backgroundColor: color.white,
    marginTop: padding.sm,
    width: '100%',
  },
  bottomCard: {flexDirection: 'row', justifyContent: 'space-between'},
  labelTotal: {
    fontWeight: 'bold',
    fontSize: textSize.xl,
    color: color.primary,
  },
});
