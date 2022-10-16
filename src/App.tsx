import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  NativeModules,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './components/atoms/button/Button';
import {products} from './data/product';
import {IProduct} from './types/IProducts';

const {DeviceInfoModule} = NativeModules;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // console.log('render screen');

  useEffect(() => {
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

      <Text>HeaderTabs</Text>
      <Button title="Hello World" />
      <MemoizeList />
      <Text>SearchInput</Text>
      <Text>CartList</Text>
      <Text>Search Here</Text>
      <Text>Categories</Text>
      <Text>ListButtonCategories</Text>
      <Text>ListProductByCategories</Text>
      <Text>RecentlyVisited</Text>
      <Text>ListRecentlyVisited</Text>
    </SafeAreaView>
  );
};

const Item = ({
  name,
  onIncrement,
  count,
}: {
  name: string;
  onIncrement(): void;
  count: number;
}) => {
  // console.log('renderItems', name);
  return (
    <View style={{padding: 20, backgroundColor: '#fff'}}>
      <Text>{name} iwi</Text>
      <Text>Count: {count}</Text>
      <TouchableOpacity style={{padding: 20}} onPress={onIncrement}>
        <Text>OnIncrement</Text>
      </TouchableOpacity>
    </View>
  );
};

const areEqual = (prevProps: {count: number}, nextProps: {count: number}) => {
  const {count} = nextProps;
  const {count: prevCount} = prevProps;

  /*if the props are equal, it won't update*/
  const isCountEqual = count === prevCount;

  return isCountEqual;
};

const MemoizedItem = memo(Item, areEqual);

const MemoizeList = memo(() => {
  const [cartList, setCartList] = useState(products);

  const onIncrement = useCallback(
    (id: number) => {
      const tempArr = cartList.map(it => {
        if (it.id === id) {
          it.qty++;
          return it;
        } else {
          return it;
        }
      });
      setCartList(tempArr);
    },
    [cartList],
  );

  const onSetKeyExtractor = useCallback((item: IProduct) => item.name, []);

  const renderItem = ({item}: {item: IProduct}) => {
    return (
      <MemoizedItem
        name={item.name}
        count={item.qty}
        onIncrement={onIncrement.bind(null, item.id)}
      />
    );
  };

  return (
    <FlatList
      data={cartList}
      renderItem={renderItem}
      keyExtractor={onSetKeyExtractor}
    />
  );
});

export default App;
