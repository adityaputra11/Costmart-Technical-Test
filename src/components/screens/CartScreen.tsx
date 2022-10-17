import React, {useEffect} from 'react';
import {
  NativeModules,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Spacer} from '../atoms/spacer';
import {BottomOrder} from '../molecules/BottomOrder';
import {Header} from '../molecules/Header';
import {CartList} from '../organisms/CartList';

const {DeviceInfoModule} = NativeModules;

const CartScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    /**
     * Task 1: Ambil device id dari mobile device menggunakan bridging native Android dan di IOS (tanpa menggunakan library)
     * */
    DeviceInfoModule.getDeviceId().then((item: any) =>
      console.log('deviceId', item),
    );
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <CartList />
      <Spacer height={124} />
      <BottomOrder />
    </SafeAreaView>
  );
};

export default CartScreen;
