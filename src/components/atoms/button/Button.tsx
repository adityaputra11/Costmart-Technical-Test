import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface IButton {
  label: string;
  onPress?(): void;
}

const Button = ({label, onPress}: IButton) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

//using infile syle while styling simple component
const styles = StyleSheet.create({
  btn: {
    padding: 20,
    backgroundColor: '#2c333a',
    borderRadius: 16,
    alignItems: 'center',
  },
  label: {fontWeight: 'bold', color: '#fff', fontSize: 16},
});

export default Button;
