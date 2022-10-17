import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color, padding, textSize} from '../../helpers/dimens';
export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.textStyle}>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: padding.xl,
    backgroundColor: color.white,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: color.secondary,
  },
  textStyle: {
    fontSize: textSize.xl,
    textAlign: 'center',
  },
});
