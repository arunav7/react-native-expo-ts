import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { FetchDataType, UserType } from './types';

const Products = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const errorViewRef = useRef();

  const renderItem = ({ item }: { item: UserType }) => (
    <View style={styles.itemWrapperStyle}>
      <Image
        style={styles.itemImageStyle}
        source={{ uri: item.picture.large }}
      />
      <View style={styles.contentWrapperStyle}>
        <Text
          style={styles.txtNameStyle}
        >{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
        <Text style={styles.txtEmailStyle}>{item.email}</Text>
      </View>
    </View>
  );

  const renderLoader = () => {
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator
          size='large'
          color='#aaa'
        />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://randomuser.me/api/?page=${page}&results=10`)
      .then(res => res.json())
      .then((data: FetchDataType) => {
        setUsers(users => [...users, ...data.results]);
        setIsLoading(false);
      })
      .catch(err => {
        errorViewRef.current = err;
        setError(true);
        setIsLoading(false);
      });
  }, [page]);

  return (
    <>
      {error && <View>{errorViewRef.current}</View>}
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.email}
        ListFooterComponent={renderLoader}
        onEndReachedThreshold={0.8}
        onEndReached={loadMoreItem}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemImageStyle: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  contentWrapperStyle: {
    justifyContent: 'space-around',
  },
  txtNameStyle: {
    fontSize: 16,
  },
  txtEmailStyle: {
    color: '#777',
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});

export default Products;
