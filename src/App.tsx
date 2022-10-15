import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  NativeModules,
  Platform,
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
  isSelected,
  onSelect,
}: {
  name: string;
  isSelected: boolean;
  onSelect(): void;
}) => {
  // console.log('renderItems', name);
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{padding: 20, backgroundColor: isSelected ? 'blue' : '#fff'}}>
      <Text>{name} iwi</Text>
    </TouchableOpacity>
  );
};

const areEqual = (
  prevProps: {isSelected: boolean},
  nextProps: {isSelected: boolean},
) => {
  const {isSelected} = nextProps;
  const {isSelected: prevIsSelected} = prevProps;

  /*if the props are equal, it won't update*/
  const isSelectedEqual = isSelected === prevIsSelected;

  return isSelectedEqual;
};

const MemoizedItem = memo(Item, areEqual);

const MemoizeList = memo(() => {
  const [selected, setSelected] = useState('');

  const onSetSelected = useCallback((name: string) => {
    setSelected(prevItem => {
      prevItem !== name;
      return name;
    });
  }, []);

  const onSetKeyExtractor = useCallback((item: IProduct) => item.name, []);

  const renderItem = ({item}: {item: IProduct}) => {
    const isSelected: boolean = item.name === selected;
    const name = item.name;
    return (
      <MemoizedItem
        name={item.name}
        isSelected={isSelected}
        onSelect={() => onSetSelected(name)}
      />
    );
  };

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={onSetKeyExtractor}
    />
  );
});

export default App;
