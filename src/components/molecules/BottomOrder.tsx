import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../atoms/button/Button';

export const BottomOrder = () => {
  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomCard}>
        <Text>Total</Text>
        <Text>Rp.100.000</Text>
      </View>
      <Button label="Place Order" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    bottom: 0,
    padding: 20,
    backgroundColor: '#fff',
    position: 'absolute',
    width: '100%',
  },
  bottomCard: {flexDirection: 'row', justifyContent: 'space-between'},
});
