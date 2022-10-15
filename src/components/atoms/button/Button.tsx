import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface IButton {
  title: string;
  onPress?(): void;
}

const Button = ({title, onPress}: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{padding: 20, backgroundColor: 'red'}}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
