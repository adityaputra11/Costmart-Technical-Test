import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface IIconButton {
  src?: ImageSourcePropType;
  onPress?(): void;
}

export const IconButton = ({src, onPress}: IIconButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.img} source={src} />
    </TouchableOpacity>
  );
};

//using infile syle while styling simple component
const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
});

export default IconButton;
