import React from 'react';
import {View} from 'react-native';

interface ISpacer {
  width?: number;
  height?: number;
}

export const Spacer = (style: ISpacer) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <View style={{width: style.width ?? 0, height: style.height ?? 0}} />;
};
