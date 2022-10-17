import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {icon} from '../../../helpers/dimens';

interface IIconButton {
  uri?: ImageSourcePropType;
  onPress?(): void;
}

export const IconButton = ({uri, onPress}: IIconButton) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.img} source={icon.close_button} />
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
