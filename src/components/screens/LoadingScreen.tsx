import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NativeModules,
} from 'react-native';
import {RoutingName} from '../../App';
import {color, padding, textSize} from '../../helpers/dimens';
import {Spacer} from '../atoms/Spacer';

const {DeviceInfoModule} = NativeModules;
const LoadingScreen = () => {
  const navigation = useNavigation();
  const navigateToCartScreen = () => {
    navigation.navigate(RoutingName.CARTSCREEN as never);
  };
  const [isHold, setIsHold] = useState(false);
  const loadProgress = useRef(new Animated.Value(0)).current;
  const countInterval = useRef<number>(0);
  const [progress, setProgress] = useState(0);
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    countInterval.current = setInterval(() => {
      if (!isHold) {
        setProgress(old => old + Math.round(Math.random() * 8));
      }
    }, 300);
    return () => {
      clearInterval(countInterval.current);
    };
  }, [isHold]);

  useEffect(() => {
    load(progress);
    if (progress >= 100) {
      setProgress(100);
      navigateToCartScreen();
      clearInterval(countInterval.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, isHold]);

  const load = (mcount: number) => {
    Animated.timing(loadProgress, {
      toValue: mcount,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const width = loadProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const toggleHold = () => {
    if (progress < 100) {
      setIsHold(!isHold);
    }
  };
  /** Task 3: Buatlah sebuah progress bar yang akan otomatis berjalan hingga 100% tetapi jika di tekan
   * (hold) animasi progress bar tersebut akan berhenti dan ketika di lepas holdnya akan jalan kembali */

  useEffect(() => {
    /**
     * Task 1: Ambil device id dari mobile device menggunakan bridging native Android dan di IOS (tanpa menggunakan library)
     * */
    DeviceInfoModule.getDeviceId().then((id: string) => setDeviceId(id));
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <Text style={styles.deviceId}>Device Id: {deviceId}</Text>
      <TouchableOpacity
        onPressIn={toggleHold.bind(null)}
        onPressOut={toggleHold.bind(null)}>
        <View style={styles.progressBar}>
          <Animated.View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: isHold ? color.gray : color.primary,
              width: width,
              borderRadius: padding.xl,
            }}
          />
        </View>
      </TouchableOpacity>
      <Spacer height={20} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: textSize.xl,
          color: color.primary,
        }}>
        Progress your cart {progress}% Press Loading Bar to
        {isHold ? ' Continue' : ' Hold'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderColor: color.secondary,
    borderWidth: 2,
    borderRadius: padding.xl,
  },
  deviceId: {
    textAlign: 'center',
    paddingVertical: padding.sm,
  },
});

export default LoadingScreen;
